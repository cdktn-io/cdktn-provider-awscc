# `dataAwsccDmsInstanceProfile` Submodule <a name="`dataAwsccDmsInstanceProfile` Submodule" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccDmsInstanceProfile <a name="DataAwsccDmsInstanceProfile" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_instance_profile awscc_dms_instance_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_instance_profile#id DataAwsccDmsInstanceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccDmsInstanceProfile resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccDmsInstanceProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccDmsInstanceProfile to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccDmsInstanceProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_instance_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccDmsInstanceProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileArn">instance_profile_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileCreationTime">instance_profile_creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileIdentifier">instance_profile_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileName">instance_profile_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.publiclyAccessible">publicly_accessible</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.subnetGroupIdentifier">subnet_group_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList">DataAwsccDmsInstanceProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.vpcSecurityGroups">vpc_security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `instance_profile_arn`<sup>Required</sup> <a name="instance_profile_arn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileArn"></a>

```python
instance_profile_arn: str
```

- *Type:* str

---

##### `instance_profile_creation_time`<sup>Required</sup> <a name="instance_profile_creation_time" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileCreationTime"></a>

```python
instance_profile_creation_time: str
```

- *Type:* str

---

##### `instance_profile_identifier`<sup>Required</sup> <a name="instance_profile_identifier" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileIdentifier"></a>

```python
instance_profile_identifier: str
```

- *Type:* str

---

##### `instance_profile_name`<sup>Required</sup> <a name="instance_profile_name" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.instanceProfileName"></a>

```python
instance_profile_name: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `publicly_accessible`<sup>Required</sup> <a name="publicly_accessible" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.publiclyAccessible"></a>

```python
publicly_accessible: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `subnet_group_identifier`<sup>Required</sup> <a name="subnet_group_identifier" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.subnetGroupIdentifier"></a>

```python
subnet_group_identifier: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.tags"></a>

```python
tags: DataAwsccDmsInstanceProfileTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList">DataAwsccDmsInstanceProfileTagsList</a>

---

##### `vpc_security_groups`<sup>Required</sup> <a name="vpc_security_groups" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.vpcSecurityGroups"></a>

```python
vpc_security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfile.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccDmsInstanceProfileConfig <a name="DataAwsccDmsInstanceProfileConfig" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/dms_instance_profile#id DataAwsccDmsInstanceProfile#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccDmsInstanceProfileTags <a name="DataAwsccDmsInstanceProfileTags" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccDmsInstanceProfileTagsList <a name="DataAwsccDmsInstanceProfileTagsList" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccDmsInstanceProfileTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccDmsInstanceProfileTagsOutputReference <a name="DataAwsccDmsInstanceProfileTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_dms_instance_profile

dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTags">DataAwsccDmsInstanceProfileTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccDmsInstanceProfileTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccDmsInstanceProfile.DataAwsccDmsInstanceProfileTags">DataAwsccDmsInstanceProfileTags</a>

---



