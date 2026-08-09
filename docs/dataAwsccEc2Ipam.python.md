# `dataAwsccEc2Ipam` Submodule <a name="`dataAwsccEc2Ipam` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2Ipam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2Ipam <a name="DataAwsccEc2Ipam" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam awscc_ec2_ipam}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2Ipam(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam#id DataAwsccEc2Ipam#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2Ipam resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2Ipam.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2Ipam.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2Ipam.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2Ipam.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2Ipam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2Ipam to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2Ipam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2Ipam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryAssociationId">default_resource_discovery_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryId">default_resource_discovery_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusions">default_resource_discovery_organizational_unit_exclusions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.enablePrivateGua">enable_private_gua</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.ipamId">ipam_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.meteredAccount">metered_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.operatingRegions">operating_regions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList">DataAwsccEc2IpamOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.privateDefaultScopeId">private_default_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.publicDefaultScopeId">public_default_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.resourceDiscoveryAssociationCount">resource_discovery_association_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.scopeCount">scope_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList">DataAwsccEc2IpamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tier">tier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `default_resource_discovery_association_id`<sup>Required</sup> <a name="default_resource_discovery_association_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryAssociationId"></a>

```python
default_resource_discovery_association_id: str
```

- *Type:* str

---

##### `default_resource_discovery_id`<sup>Required</sup> <a name="default_resource_discovery_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryId"></a>

```python
default_resource_discovery_id: str
```

- *Type:* str

---

##### `default_resource_discovery_organizational_unit_exclusions`<sup>Required</sup> <a name="default_resource_discovery_organizational_unit_exclusions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusions"></a>

```python
default_resource_discovery_organizational_unit_exclusions: DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enable_private_gua`<sup>Required</sup> <a name="enable_private_gua" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.enablePrivateGua"></a>

```python
enable_private_gua: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ipam_id`<sup>Required</sup> <a name="ipam_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.ipamId"></a>

```python
ipam_id: str
```

- *Type:* str

---

##### `metered_account`<sup>Required</sup> <a name="metered_account" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.meteredAccount"></a>

```python
metered_account: str
```

- *Type:* str

---

##### `operating_regions`<sup>Required</sup> <a name="operating_regions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.operatingRegions"></a>

```python
operating_regions: DataAwsccEc2IpamOperatingRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList">DataAwsccEc2IpamOperatingRegionsList</a>

---

##### `private_default_scope_id`<sup>Required</sup> <a name="private_default_scope_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.privateDefaultScopeId"></a>

```python
private_default_scope_id: str
```

- *Type:* str

---

##### `public_default_scope_id`<sup>Required</sup> <a name="public_default_scope_id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.publicDefaultScopeId"></a>

```python
public_default_scope_id: str
```

- *Type:* str

---

##### `resource_discovery_association_count`<sup>Required</sup> <a name="resource_discovery_association_count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.resourceDiscoveryAssociationCount"></a>

```python
resource_discovery_association_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scope_count`<sup>Required</sup> <a name="scope_count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.scopeCount"></a>

```python
scope_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tags"></a>

```python
tags: DataAwsccEc2IpamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList">DataAwsccEc2IpamTagsList</a>

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tier"></a>

```python
tier: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2Ipam.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2IpamConfig <a name="DataAwsccEc2IpamConfig" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/ec2_ipam#id DataAwsccEc2Ipam#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions <a name="DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions()
```


### DataAwsccEc2IpamOperatingRegions <a name="DataAwsccEc2IpamOperatingRegions" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions()
```


### DataAwsccEc2IpamTags <a name="DataAwsccEc2IpamTags" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList <a name="DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">organizations_entity_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `organizations_entity_path`<sup>Required</sup> <a name="organizations_entity_path" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```python
organizations_entity_path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions">DataAwsccEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions</a>

---


### DataAwsccEc2IpamOperatingRegionsList <a name="DataAwsccEc2IpamOperatingRegionsList" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamOperatingRegionsOutputReference <a name="DataAwsccEc2IpamOperatingRegionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions">DataAwsccEc2IpamOperatingRegions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamOperatingRegions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamOperatingRegions">DataAwsccEc2IpamOperatingRegions</a>

---


### DataAwsccEc2IpamTagsList <a name="DataAwsccEc2IpamTagsList" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2IpamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2IpamTagsOutputReference <a name="DataAwsccEc2IpamTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_ipam

dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags">DataAwsccEc2IpamTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2IpamTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2Ipam.DataAwsccEc2IpamTags">DataAwsccEc2IpamTags</a>

---



