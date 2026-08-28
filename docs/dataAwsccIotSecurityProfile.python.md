# `dataAwsccIotSecurityProfile` Submodule <a name="`dataAwsccIotSecurityProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotSecurityProfile <a name="DataAwsccIotSecurityProfile" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile awscc_iot_security_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile#id DataAwsccIotSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotSecurityProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotSecurityProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotSecurityProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotSecurityProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.additionalMetricsToRetainV2">additional_metrics_to_retain_v2</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.alertTargets">alert_targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap">DataAwsccIotSecurityProfileAlertTargetsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.behaviors">behaviors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList">DataAwsccIotSecurityProfileBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.metricsExportConfig">metrics_export_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference">DataAwsccIotSecurityProfileMetricsExportConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileArn">security_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileDescription">security_profile_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileName">security_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList">DataAwsccIotSecurityProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.targetArns">target_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `additional_metrics_to_retain_v2`<sup>Required</sup> <a name="additional_metrics_to_retain_v2" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.additionalMetricsToRetainV2"></a>

```python
additional_metrics_to_retain_v2: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List</a>

---

##### `alert_targets`<sup>Required</sup> <a name="alert_targets" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.alertTargets"></a>

```python
alert_targets: DataAwsccIotSecurityProfileAlertTargetsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap">DataAwsccIotSecurityProfileAlertTargetsMap</a>

---

##### `behaviors`<sup>Required</sup> <a name="behaviors" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.behaviors"></a>

```python
behaviors: DataAwsccIotSecurityProfileBehaviorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList">DataAwsccIotSecurityProfileBehaviorsList</a>

---

##### `metrics_export_config`<sup>Required</sup> <a name="metrics_export_config" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.metricsExportConfig"></a>

```python
metrics_export_config: DataAwsccIotSecurityProfileMetricsExportConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference">DataAwsccIotSecurityProfileMetricsExportConfigOutputReference</a>

---

##### `security_profile_arn`<sup>Required</sup> <a name="security_profile_arn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileArn"></a>

```python
security_profile_arn: str
```

- *Type:* str

---

##### `security_profile_description`<sup>Required</sup> <a name="security_profile_description" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileDescription"></a>

```python
security_profile_description: str
```

- *Type:* str

---

##### `security_profile_name`<sup>Required</sup> <a name="security_profile_name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.securityProfileName"></a>

```python
security_profile_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tags"></a>

```python
tags: DataAwsccIotSecurityProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList">DataAwsccIotSecurityProfileTagsList</a>

---

##### `target_arns`<sup>Required</sup> <a name="target_arns" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.targetArns"></a>

```python
target_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2 <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2()
```


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension()
```


### DataAwsccIotSecurityProfileAlertTargets <a name="DataAwsccIotSecurityProfileAlertTargets" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets()
```


### DataAwsccIotSecurityProfileBehaviors <a name="DataAwsccIotSecurityProfileBehaviors" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors()
```


### DataAwsccIotSecurityProfileBehaviorsCriteria <a name="DataAwsccIotSecurityProfileBehaviorsCriteria" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria()
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig()
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold()
```


### DataAwsccIotSecurityProfileBehaviorsCriteriaValue <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaValue" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue()
```


### DataAwsccIotSecurityProfileBehaviorsMetricDimension <a name="DataAwsccIotSecurityProfileBehaviorsMetricDimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension()
```


### DataAwsccIotSecurityProfileConfig <a name="DataAwsccIotSecurityProfileConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/iot_security_profile#id DataAwsccIotSecurityProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotSecurityProfileMetricsExportConfig <a name="DataAwsccIotSecurityProfileMetricsExportConfig" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig()
```


### DataAwsccIotSecurityProfileTags <a name="DataAwsccIotSecurityProfileTags" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2List.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimension</a>

---


### DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference <a name="DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric">export_metric</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension">metric_dimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `export_metric`<sup>Required</sup> <a name="export_metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.exportMetric"></a>

```python
export_metric: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_dimension`<sup>Required</sup> <a name="metric_dimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.metricDimension"></a>

```python
metric_dimension: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2MetricDimensionOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2OutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2">DataAwsccIotSecurityProfileAdditionalMetricsToRetainV2</a>

---


### DataAwsccIotSecurityProfileAlertTargetsMap <a name="DataAwsccIotSecurityProfileAlertTargetsMap" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get"></a>

```python
def get(
  key: str
) -> DataAwsccIotSecurityProfileAlertTargetsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotSecurityProfileAlertTargetsOutputReference <a name="DataAwsccIotSecurityProfileAlertTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn">alert_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets">DataAwsccIotSecurityProfileAlertTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alert_target_arn`<sup>Required</sup> <a name="alert_target_arn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.alertTargetArn"></a>

```python
alert_target_arn: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileAlertTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileAlertTargets">DataAwsccIotSecurityProfileAlertTargets</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel">confidence_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `confidence_level`<sup>Required</sup> <a name="confidence_level" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.confidenceLevel"></a>

```python
confidence_level: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfig</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator">comparison_operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm">consecutive_datapoints_to_alarm</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear">consecutive_datapoints_to_clear</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig">ml_detection_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold">statistical_threshold</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.value">value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria">DataAwsccIotSecurityProfileBehaviorsCriteria</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `comparison_operator`<sup>Required</sup> <a name="comparison_operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.comparisonOperator"></a>

```python
comparison_operator: str
```

- *Type:* str

---

##### `consecutive_datapoints_to_alarm`<sup>Required</sup> <a name="consecutive_datapoints_to_alarm" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToAlarm"></a>

```python
consecutive_datapoints_to_alarm: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `consecutive_datapoints_to_clear`<sup>Required</sup> <a name="consecutive_datapoints_to_clear" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.consecutiveDatapointsToClear"></a>

```python
consecutive_datapoints_to_clear: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ml_detection_config`<sup>Required</sup> <a name="ml_detection_config" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.mlDetectionConfig"></a>

```python
ml_detection_config: DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaMlDetectionConfigOutputReference</a>

---

##### `statistical_threshold`<sup>Required</sup> <a name="statistical_threshold" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.statisticalThreshold"></a>

```python
statistical_threshold: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference</a>

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.value"></a>

```python
value: DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileBehaviorsCriteria
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteria">DataAwsccIotSecurityProfileBehaviorsCriteria</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic">statistic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `statistic`<sup>Required</sup> <a name="statistic" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.statistic"></a>

```python
statistic: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThresholdOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold">DataAwsccIotSecurityProfileBehaviorsCriteriaStatisticalThreshold</a>

---


### DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count">count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers">numbers</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings">strings</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue">DataAwsccIotSecurityProfileBehaviorsCriteriaValue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.count"></a>

```python
count: str
```

- *Type:* str

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `numbers`<sup>Required</sup> <a name="numbers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.numbers"></a>

```python
numbers: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `strings`<sup>Required</sup> <a name="strings" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.strings"></a>

```python
strings: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValueOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileBehaviorsCriteriaValue
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaValue">DataAwsccIotSecurityProfileBehaviorsCriteriaValue</a>

---


### DataAwsccIotSecurityProfileBehaviorsList <a name="DataAwsccIotSecurityProfileBehaviorsList" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotSecurityProfileBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName">dimension_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator">operator</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension">DataAwsccIotSecurityProfileBehaviorsMetricDimension</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dimension_name`<sup>Required</sup> <a name="dimension_name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.dimensionName"></a>

```python
dimension_name: str
```

- *Type:* str

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.operator"></a>

```python
operator: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileBehaviorsMetricDimension
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimension">DataAwsccIotSecurityProfileBehaviorsMetricDimension</a>

---


### DataAwsccIotSecurityProfileBehaviorsOutputReference <a name="DataAwsccIotSecurityProfileBehaviorsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.exportMetric">export_metric</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metric">metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metricDimension">metric_dimension</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference">DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.suppressAlerts">suppress_alerts</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors">DataAwsccIotSecurityProfileBehaviors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.criteria"></a>

```python
criteria: DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference">DataAwsccIotSecurityProfileBehaviorsCriteriaOutputReference</a>

---

##### `export_metric`<sup>Required</sup> <a name="export_metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.exportMetric"></a>

```python
export_metric: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metric"></a>

```python
metric: str
```

- *Type:* str

---

##### `metric_dimension`<sup>Required</sup> <a name="metric_dimension" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.metricDimension"></a>

```python
metric_dimension: DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference">DataAwsccIotSecurityProfileBehaviorsMetricDimensionOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `suppress_alerts`<sup>Required</sup> <a name="suppress_alerts" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.suppressAlerts"></a>

```python
suppress_alerts: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileBehaviors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileBehaviors">DataAwsccIotSecurityProfileBehaviors</a>

---


### DataAwsccIotSecurityProfileMetricsExportConfigOutputReference <a name="DataAwsccIotSecurityProfileMetricsExportConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic">mqtt_topic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig">DataAwsccIotSecurityProfileMetricsExportConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mqtt_topic`<sup>Required</sup> <a name="mqtt_topic" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.mqttTopic"></a>

```python
mqtt_topic: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileMetricsExportConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileMetricsExportConfig">DataAwsccIotSecurityProfileMetricsExportConfig</a>

---


### DataAwsccIotSecurityProfileTagsList <a name="DataAwsccIotSecurityProfileTagsList" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotSecurityProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotSecurityProfileTagsOutputReference <a name="DataAwsccIotSecurityProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iot_security_profile

dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags">DataAwsccIotSecurityProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotSecurityProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotSecurityProfile.DataAwsccIotSecurityProfileTags">DataAwsccIotSecurityProfileTags</a>

---



