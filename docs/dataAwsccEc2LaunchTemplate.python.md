# `dataAwsccEc2LaunchTemplate` Submodule <a name="`dataAwsccEc2LaunchTemplate` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2LaunchTemplate <a name="DataAwsccEc2LaunchTemplate" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_launch_template awscc_ec2_launch_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_launch_template#id DataAwsccEc2LaunchTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2LaunchTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2LaunchTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2LaunchTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2LaunchTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_launch_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2LaunchTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.defaultVersionNumber">default_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.latestVersionNumber">latest_version_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateData">launch_template_data</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateId">launch_template_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateName">launch_template_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList">DataAwsccEc2LaunchTemplateTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.versionDescription">version_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `default_version_number`<sup>Required</sup> <a name="default_version_number" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.defaultVersionNumber"></a>

```python
default_version_number: str
```

- *Type:* str

---

##### `latest_version_number`<sup>Required</sup> <a name="latest_version_number" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.latestVersionNumber"></a>

```python
latest_version_number: str
```

- *Type:* str

---

##### `launch_template_data`<sup>Required</sup> <a name="launch_template_data" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateData"></a>

```python
launch_template_data: DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference</a>

---

##### `launch_template_id`<sup>Required</sup> <a name="launch_template_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateId"></a>

```python
launch_template_id: str
```

- *Type:* str

---

##### `launch_template_name`<sup>Required</sup> <a name="launch_template_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.launchTemplateName"></a>

```python
launch_template_name: str
```

- *Type:* str

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tagSpecifications"></a>

```python
tag_specifications: DataAwsccEc2LaunchTemplateTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList">DataAwsccEc2LaunchTemplateTagSpecificationsList</a>

---

##### `version_description`<sup>Required</sup> <a name="version_description" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.versionDescription"></a>

```python
version_description: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2LaunchTemplateConfig <a name="DataAwsccEc2LaunchTemplateConfig" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_launch_template#id DataAwsccEc2LaunchTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2LaunchTemplateLaunchTemplateData <a name="DataAwsccEc2LaunchTemplateLaunchTemplateData" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications()
```


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags()
```


### DataAwsccEc2LaunchTemplateTagSpecifications <a name="DataAwsccEc2LaunchTemplateTagSpecifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications()
```


### DataAwsccEc2LaunchTemplateTagSpecificationsTags <a name="DataAwsccEc2LaunchTemplateTagSpecificationsTags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.encrypted">encrypted</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.throughput">throughput</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeSize">volume_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeType">volume_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `encrypted`<sup>Required</sup> <a name="encrypted" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.encrypted"></a>

```python
encrypted: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `throughput`<sup>Required</sup> <a name="throughput" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.throughput"></a>

```python
throughput: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_size`<sup>Required</sup> <a name="volume_size" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeSize"></a>

```python
volume_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_type`<sup>Required</sup> <a name="volume_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.volumeType"></a>

```python
volume_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbs</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.deviceName">device_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.ebs">ebs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.noDevice">no_device</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.virtualName">virtual_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `device_name`<sup>Required</sup> <a name="device_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.deviceName"></a>

```python
device_name: str
```

- *Type:* str

---

##### `ebs`<sup>Required</sup> <a name="ebs" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.ebs"></a>

```python
ebs: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsEbsOutputReference</a>

---

##### `no_device`<sup>Required</sup> <a name="no_device" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.noDevice"></a>

```python
no_device: str
```

- *Type:* str

---

##### `virtual_name`<sup>Required</sup> <a name="virtual_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.virtualName"></a>

```python
virtual_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappings</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn">capacity_reservation_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `capacity_reservation_resource_group_arn`<sup>Required</sup> <a name="capacity_reservation_resource_group_arn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.capacityReservationResourceGroupArn"></a>

```python
capacity_reservation_resource_group_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTarget</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationPreference">capacity_reservation_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationTarget">capacity_reservation_target</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_reservation_preference`<sup>Required</sup> <a name="capacity_reservation_preference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationPreference"></a>

```python
capacity_reservation_preference: str
```

- *Type:* str

---

##### `capacity_reservation_target`<sup>Required</sup> <a name="capacity_reservation_target" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.capacityReservationTarget"></a>

```python
capacity_reservation_target: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationCapacityReservationTargetOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.amdSevSnp">amd_sev_snp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.coreCount">core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.threadsPerCore">threads_per_core</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `amd_sev_snp`<sup>Required</sup> <a name="amd_sev_snp" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.amdSevSnp"></a>

```python
amd_sev_snp: str
```

- *Type:* str

---

##### `core_count`<sup>Required</sup> <a name="core_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.coreCount"></a>

```python
core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `threads_per_core`<sup>Required</sup> <a name="threads_per_core" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.threadsPerCore"></a>

```python
threads_per_core: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.cpuCredits">cpu_credits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_credits`<sup>Required</sup> <a name="cpu_credits" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.cpuCredits"></a>

```python
cpu_credits: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecifications</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAccelerators</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.configured">configured</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configured`<sup>Required</sup> <a name="configured" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.configured"></a>

```python
configured: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfile</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.marketType">market_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.spotOptions">spot_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `market_type`<sup>Required</sup> <a name="market_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.marketType"></a>

```python
market_type: str
```

- *Type:* str

---

##### `spot_options`<sup>Required</sup> <a name="spot_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.spotOptions"></a>

```python
spot_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes">block_duration_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior">instance_interruption_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice">max_price</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType">spot_instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil">valid_until</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_duration_minutes`<sup>Required</sup> <a name="block_duration_minutes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.blockDurationMinutes"></a>

```python
block_duration_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_interruption_behavior`<sup>Required</sup> <a name="instance_interruption_behavior" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.instanceInterruptionBehavior"></a>

```python
instance_interruption_behavior: str
```

- *Type:* str

---

##### `max_price`<sup>Required</sup> <a name="max_price" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.maxPrice"></a>

```python
max_price: str
```

- *Type:* str

---

##### `spot_instance_type`<sup>Required</sup> <a name="spot_instance_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.spotInstanceType"></a>

```python
spot_instance_type: str
```

- *Type:* str

---

##### `valid_until`<sup>Required</sup> <a name="valid_until" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.validUntil"></a>

```python
valid_until: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsSpotOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCount</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiB</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbps</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references">references</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.references"></a>

```python
references: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpu</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily">instance_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferencesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuReferences</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu">cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.cpu"></a>

```python
cpu: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsCpuOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactors</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpu</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiB</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbps</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCount</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorCount">accelerator_count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorManufacturers">accelerator_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorNames">accelerator_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB">accelerator_total_memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTypes">accelerator_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.allowedInstanceTypes">allowed_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.bareMetal">bare_metal</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps">baseline_ebs_bandwidth_mbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselinePerformanceFactors">baseline_performance_factors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.burstablePerformance">burstable_performance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.cpuManufacturers">cpu_manufacturers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.excludedInstanceTypes">excluded_instance_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.instanceGenerations">instance_generations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorage">local_storage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorageTypes">local_storage_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice">max_spot_price_as_percentage_of_optimal_on_demand_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryGiBPerVCpu">memory_gi_b_per_v_cpu</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryMiB">memory_mi_b</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkBandwidthGbps">network_bandwidth_gbps</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkInterfaceCount">network_interface_count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice">on_demand_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.requireHibernateSupport">require_hibernate_support</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice">spot_max_price_percentage_over_lowest_price</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.totalLocalStorageGb">total_local_storage_gb</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.vCpuCount">v_cpu_count</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accelerator_count`<sup>Required</sup> <a name="accelerator_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorCount"></a>

```python
accelerator_count: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorCountOutputReference</a>

---

##### `accelerator_manufacturers`<sup>Required</sup> <a name="accelerator_manufacturers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorManufacturers"></a>

```python
accelerator_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_names`<sup>Required</sup> <a name="accelerator_names" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorNames"></a>

```python
accelerator_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `accelerator_total_memory_mi_b`<sup>Required</sup> <a name="accelerator_total_memory_mi_b" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTotalMemoryMiB"></a>

```python
accelerator_total_memory_mi_b: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsAcceleratorTotalMemoryMiBOutputReference</a>

---

##### `accelerator_types`<sup>Required</sup> <a name="accelerator_types" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.acceleratorTypes"></a>

```python
accelerator_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_instance_types`<sup>Required</sup> <a name="allowed_instance_types" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.allowedInstanceTypes"></a>

```python
allowed_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `bare_metal`<sup>Required</sup> <a name="bare_metal" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.bareMetal"></a>

```python
bare_metal: str
```

- *Type:* str

---

##### `baseline_ebs_bandwidth_mbps`<sup>Required</sup> <a name="baseline_ebs_bandwidth_mbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselineEbsBandwidthMbps"></a>

```python
baseline_ebs_bandwidth_mbps: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselineEbsBandwidthMbpsOutputReference</a>

---

##### `baseline_performance_factors`<sup>Required</sup> <a name="baseline_performance_factors" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.baselinePerformanceFactors"></a>

```python
baseline_performance_factors: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsBaselinePerformanceFactorsOutputReference</a>

---

##### `burstable_performance`<sup>Required</sup> <a name="burstable_performance" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.burstablePerformance"></a>

```python
burstable_performance: str
```

- *Type:* str

---

##### `cpu_manufacturers`<sup>Required</sup> <a name="cpu_manufacturers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.cpuManufacturers"></a>

```python
cpu_manufacturers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `excluded_instance_types`<sup>Required</sup> <a name="excluded_instance_types" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.excludedInstanceTypes"></a>

```python
excluded_instance_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `instance_generations`<sup>Required</sup> <a name="instance_generations" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.instanceGenerations"></a>

```python
instance_generations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `local_storage`<sup>Required</sup> <a name="local_storage" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorage"></a>

```python
local_storage: str
```

- *Type:* str

---

##### `local_storage_types`<sup>Required</sup> <a name="local_storage_types" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.localStorageTypes"></a>

```python
local_storage_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `max_spot_price_as_percentage_of_optimal_on_demand_price`<sup>Required</sup> <a name="max_spot_price_as_percentage_of_optimal_on_demand_price" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.maxSpotPriceAsPercentageOfOptimalOnDemandPrice"></a>

```python
max_spot_price_as_percentage_of_optimal_on_demand_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_gi_b_per_v_cpu`<sup>Required</sup> <a name="memory_gi_b_per_v_cpu" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryGiBPerVCpu"></a>

```python
memory_gi_b_per_v_cpu: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryGiBPerVCpuOutputReference</a>

---

##### `memory_mi_b`<sup>Required</sup> <a name="memory_mi_b" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.memoryMiB"></a>

```python
memory_mi_b: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsMemoryMiBOutputReference</a>

---

##### `network_bandwidth_gbps`<sup>Required</sup> <a name="network_bandwidth_gbps" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkBandwidthGbps"></a>

```python
network_bandwidth_gbps: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkBandwidthGbpsOutputReference</a>

---

##### `network_interface_count`<sup>Required</sup> <a name="network_interface_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.networkInterfaceCount"></a>

```python
network_interface_count: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsNetworkInterfaceCountOutputReference</a>

---

##### `on_demand_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="on_demand_max_price_percentage_over_lowest_price" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.onDemandMaxPricePercentageOverLowestPrice"></a>

```python
on_demand_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `require_hibernate_support`<sup>Required</sup> <a name="require_hibernate_support" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.requireHibernateSupport"></a>

```python
require_hibernate_support: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `spot_max_price_percentage_over_lowest_price`<sup>Required</sup> <a name="spot_max_price_percentage_over_lowest_price" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.spotMaxPricePercentageOverLowestPrice"></a>

```python
spot_max_price_percentage_over_lowest_price: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_local_storage_gb`<sup>Required</sup> <a name="total_local_storage_gb" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.totalLocalStorageGb"></a>

```python
total_local_storage_gb: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference</a>

---

##### `v_cpu_count`<sup>Required</sup> <a name="v_cpu_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.vCpuCount"></a>

```python
v_cpu_count: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirements</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGbOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsTotalLocalStorageGb</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.max">max</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.min">min</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `max`<sup>Required</sup> <a name="max" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.max"></a>

```python
max: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `min`<sup>Required</sup> <a name="min" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.min"></a>

```python
min: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCountOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsVCpuCount</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.licenseConfigurationArn">license_configuration_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `license_configuration_arn`<sup>Required</sup> <a name="license_configuration_arn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.licenseConfigurationArn"></a>

```python
license_configuration_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecifications</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.autoRecovery">auto_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_recovery`<sup>Required</sup> <a name="auto_recovery" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.autoRecovery"></a>

```python
auto_recovery: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpEndpoint">http_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpProtocolIpv6">http_protocol_ipv6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpPutResponseHopLimit">http_put_response_hop_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpTokens">http_tokens</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.instanceMetadataTags">instance_metadata_tags</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_endpoint`<sup>Required</sup> <a name="http_endpoint" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpEndpoint"></a>

```python
http_endpoint: str
```

- *Type:* str

---

##### `http_protocol_ipv6`<sup>Required</sup> <a name="http_protocol_ipv6" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpProtocolIpv6"></a>

```python
http_protocol_ipv6: str
```

- *Type:* str

---

##### `http_put_response_hop_limit`<sup>Required</sup> <a name="http_put_response_hop_limit" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpPutResponseHopLimit"></a>

```python
http_put_response_hop_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `http_tokens`<sup>Required</sup> <a name="http_tokens" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.httpTokens"></a>

```python
http_tokens: str
```

- *Type:* str

---

##### `instance_metadata_tags`<sup>Required</sup> <a name="instance_metadata_tags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.instanceMetadataTags"></a>

```python
instance_metadata_tags: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoring</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout">tcp_established_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout">udp_stream_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout">udp_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tcp_established_timeout`<sup>Required</sup> <a name="tcp_established_timeout" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.tcpEstablishedTimeout"></a>

```python
tcp_established_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_stream_timeout`<sup>Required</sup> <a name="udp_stream_timeout" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpStreamTimeout"></a>

```python
udp_stream_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `udp_timeout`<sup>Required</sup> <a name="udp_timeout" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.udpTimeout"></a>

```python
udp_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled">ena_srd_udp_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_udp_enabled`<sup>Required</sup> <a name="ena_srd_udp_enabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.enaSrdUdpEnabled"></a>

```python
ena_srd_udp_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled">ena_srd_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification">ena_srd_udp_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ena_srd_enabled`<sup>Required</sup> <a name="ena_srd_enabled" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdEnabled"></a>

```python
ena_srd_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ena_srd_udp_specification`<sup>Required</sup> <a name="ena_srd_udp_specification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.enaSrdUdpSpecification"></a>

```python
ena_srd_udp_specification: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationEnaSrdUdpSpecificationOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecification</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.ipv4Prefix">ipv4_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv4_prefix`<sup>Required</sup> <a name="ipv4_prefix" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.ipv4Prefix"></a>

```python
ipv4_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4Prefixes</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address">ipv6_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_address`<sup>Required</sup> <a name="ipv6_address" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.ipv6Address"></a>

```python
ipv6_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Addresses</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.ipv6Prefix">ipv6_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ipv6_prefix`<sup>Required</sup> <a name="ipv6_prefix" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.ipv6Prefix"></a>

```python
ipv6_prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6Prefixes</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associateCarrierIpAddress">associate_carrier_ip_address</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associatePublicIpAddress">associate_public_ip_address</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.connectionTrackingSpecification">connection_tracking_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deleteOnTermination">delete_on_termination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.enaSrdSpecification">ena_srd_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.groups">groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.interfaceType">interface_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4PrefixCount">ipv4_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4Prefixes">ipv4_prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6AddressCount">ipv6_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Addresses">ipv6_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6PrefixCount">ipv6_prefix_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Prefixes">ipv6_prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkCardIndex">network_card_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.primaryIpv6">primary_ipv6</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddresses">private_ip_addresses</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount">secondary_private_ip_address_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `associate_carrier_ip_address`<sup>Required</sup> <a name="associate_carrier_ip_address" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associateCarrierIpAddress"></a>

```python
associate_carrier_ip_address: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `associate_public_ip_address`<sup>Required</sup> <a name="associate_public_ip_address" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.associatePublicIpAddress"></a>

```python
associate_public_ip_address: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `connection_tracking_specification`<sup>Required</sup> <a name="connection_tracking_specification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.connectionTrackingSpecification"></a>

```python
connection_tracking_specification: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesConnectionTrackingSpecificationOutputReference</a>

---

##### `delete_on_termination`<sup>Required</sup> <a name="delete_on_termination" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deleteOnTermination"></a>

```python
delete_on_termination: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ena_srd_specification`<sup>Required</sup> <a name="ena_srd_specification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.enaSrdSpecification"></a>

```python
ena_srd_specification: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesEnaSrdSpecificationOutputReference</a>

---

##### `groups`<sup>Required</sup> <a name="groups" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.groups"></a>

```python
groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `interface_type`<sup>Required</sup> <a name="interface_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.interfaceType"></a>

```python
interface_type: str
```

- *Type:* str

---

##### `ipv4_prefix_count`<sup>Required</sup> <a name="ipv4_prefix_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4PrefixCount"></a>

```python
ipv4_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv4_prefixes`<sup>Required</sup> <a name="ipv4_prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv4Prefixes"></a>

```python
ipv4_prefixes: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv4PrefixesList</a>

---

##### `ipv6_address_count`<sup>Required</sup> <a name="ipv6_address_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6AddressCount"></a>

```python
ipv6_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Addresses"></a>

```python
ipv6_addresses: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6AddressesList</a>

---

##### `ipv6_prefix_count`<sup>Required</sup> <a name="ipv6_prefix_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6PrefixCount"></a>

```python
ipv6_prefix_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_prefixes`<sup>Required</sup> <a name="ipv6_prefixes" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.ipv6Prefixes"></a>

```python
ipv6_prefixes: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesIpv6PrefixesList</a>

---

##### `network_card_index`<sup>Required</sup> <a name="network_card_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkCardIndex"></a>

```python
network_card_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `primary_ipv6`<sup>Required</sup> <a name="primary_ipv6" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.primaryIpv6"></a>

```python
primary_ipv6: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `private_ip_addresses`<sup>Required</sup> <a name="private_ip_addresses" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.privateIpAddresses"></a>

```python
private_ip_addresses: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList</a>

---

##### `secondary_private_ip_address_count`<sup>Required</sup> <a name="secondary_private_ip_address_count" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.secondaryPrivateIpAddressCount"></a>

```python
secondary_private_ip_address_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfaces</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.primary">primary</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.primary"></a>

```python
primary: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddressesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesPrivateIpAddresses</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.blockDeviceMappings">block_device_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.capacityReservationSpecification">capacity_reservation_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.cpuOptions">cpu_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creditSpecification">credit_specification</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiStop">disable_api_stop</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiTermination">disable_api_termination</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ebsOptimized">ebs_optimized</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticGpuSpecifications">elastic_gpu_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticInferenceAccelerators">elastic_inference_accelerators</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.enclaveOptions">enclave_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.hibernationOptions">hibernation_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.iamInstanceProfile">iam_instance_profile</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceInitiatedShutdownBehavior">instance_initiated_shutdown_behavior</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceMarketOptions">instance_market_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceRequirements">instance_requirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.kernelId">kernel_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.keyName">key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.licenseSpecifications">license_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.maintenanceOptions">maintenance_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.metadataOptions">metadata_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.monitoring">monitoring</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.placement">placement</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.privateDnsNameOptions">private_dns_name_options</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ramDiskId">ram_disk_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.tagSpecifications">tag_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.userData">user_data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData">DataAwsccEc2LaunchTemplateLaunchTemplateData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_device_mappings`<sup>Required</sup> <a name="block_device_mappings" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.blockDeviceMappings"></a>

```python
block_device_mappings: DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataBlockDeviceMappingsList</a>

---

##### `capacity_reservation_specification`<sup>Required</sup> <a name="capacity_reservation_specification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.capacityReservationSpecification"></a>

```python
capacity_reservation_specification: DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCapacityReservationSpecificationOutputReference</a>

---

##### `cpu_options`<sup>Required</sup> <a name="cpu_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.cpuOptions"></a>

```python
cpu_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCpuOptionsOutputReference</a>

---

##### `credit_specification`<sup>Required</sup> <a name="credit_specification" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.creditSpecification"></a>

```python
credit_specification: DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataCreditSpecificationOutputReference</a>

---

##### `disable_api_stop`<sup>Required</sup> <a name="disable_api_stop" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiStop"></a>

```python
disable_api_stop: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `disable_api_termination`<sup>Required</sup> <a name="disable_api_termination" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.disableApiTermination"></a>

```python
disable_api_termination: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `ebs_optimized`<sup>Required</sup> <a name="ebs_optimized" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ebsOptimized"></a>

```python
ebs_optimized: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `elastic_gpu_specifications`<sup>Required</sup> <a name="elastic_gpu_specifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticGpuSpecifications"></a>

```python
elastic_gpu_specifications: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticGpuSpecificationsList</a>

---

##### `elastic_inference_accelerators`<sup>Required</sup> <a name="elastic_inference_accelerators" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.elasticInferenceAccelerators"></a>

```python
elastic_inference_accelerators: DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataElasticInferenceAcceleratorsList</a>

---

##### `enclave_options`<sup>Required</sup> <a name="enclave_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.enclaveOptions"></a>

```python
enclave_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataEnclaveOptionsOutputReference</a>

---

##### `hibernation_options`<sup>Required</sup> <a name="hibernation_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.hibernationOptions"></a>

```python
hibernation_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataHibernationOptionsOutputReference</a>

---

##### `iam_instance_profile`<sup>Required</sup> <a name="iam_instance_profile" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.iamInstanceProfile"></a>

```python
iam_instance_profile: DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataIamInstanceProfileOutputReference</a>

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_initiated_shutdown_behavior`<sup>Required</sup> <a name="instance_initiated_shutdown_behavior" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceInitiatedShutdownBehavior"></a>

```python
instance_initiated_shutdown_behavior: str
```

- *Type:* str

---

##### `instance_market_options`<sup>Required</sup> <a name="instance_market_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceMarketOptions"></a>

```python
instance_market_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceMarketOptionsOutputReference</a>

---

##### `instance_requirements`<sup>Required</sup> <a name="instance_requirements" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceRequirements"></a>

```python
instance_requirements: DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataInstanceRequirementsOutputReference</a>

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `kernel_id`<sup>Required</sup> <a name="kernel_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.kernelId"></a>

```python
kernel_id: str
```

- *Type:* str

---

##### `key_name`<sup>Required</sup> <a name="key_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.keyName"></a>

```python
key_name: str
```

- *Type:* str

---

##### `license_specifications`<sup>Required</sup> <a name="license_specifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.licenseSpecifications"></a>

```python
license_specifications: DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataLicenseSpecificationsList</a>

---

##### `maintenance_options`<sup>Required</sup> <a name="maintenance_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.maintenanceOptions"></a>

```python
maintenance_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMaintenanceOptionsOutputReference</a>

---

##### `metadata_options`<sup>Required</sup> <a name="metadata_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.metadataOptions"></a>

```python
metadata_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMetadataOptionsOutputReference</a>

---

##### `monitoring`<sup>Required</sup> <a name="monitoring" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.monitoring"></a>

```python
monitoring: DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataMonitoringOutputReference</a>

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.networkInterfaces"></a>

```python
network_interfaces: DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList">DataAwsccEc2LaunchTemplateLaunchTemplateDataNetworkInterfacesList</a>

---

##### `placement`<sup>Required</sup> <a name="placement" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.placement"></a>

```python
placement: DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference</a>

---

##### `private_dns_name_options`<sup>Required</sup> <a name="private_dns_name_options" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.privateDnsNameOptions"></a>

```python
private_dns_name_options: DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference</a>

---

##### `ram_disk_id`<sup>Required</sup> <a name="ram_disk_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.ramDiskId"></a>

```python
ram_disk_id: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tag_specifications`<sup>Required</sup> <a name="tag_specifications" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.tagSpecifications"></a>

```python
tag_specifications: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList</a>

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateData
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateData">DataAwsccEc2LaunchTemplateLaunchTemplateData</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.affinity">affinity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupId">group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupName">group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostResourceGroupArn">host_resource_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.partitionNumber">partition_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.spreadDomain">spread_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.tenancy">tenancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `affinity`<sup>Required</sup> <a name="affinity" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.affinity"></a>

```python
affinity: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `group_id`<sup>Required</sup> <a name="group_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupId"></a>

```python
group_id: str
```

- *Type:* str

---

##### `group_name`<sup>Required</sup> <a name="group_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.groupName"></a>

```python
group_name: str
```

- *Type:* str

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `host_resource_group_arn`<sup>Required</sup> <a name="host_resource_group_arn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.hostResourceGroupArn"></a>

```python
host_resource_group_arn: str
```

- *Type:* str

---

##### `partition_number`<sup>Required</sup> <a name="partition_number" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.partitionNumber"></a>

```python
partition_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spread_domain`<sup>Required</sup> <a name="spread_domain" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.spreadDomain"></a>

```python
spread_domain: str
```

- *Type:* str

---

##### `tenancy`<sup>Required</sup> <a name="tenancy" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.tenancy"></a>

```python
tenancy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacementOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement">DataAwsccEc2LaunchTemplateLaunchTemplateDataPlacement</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord">enable_resource_name_dns_aaaa_record</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord">enable_resource_name_dns_a_record</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.hostnameType">hostname_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_resource_name_dns_aaaa_record`<sup>Required</sup> <a name="enable_resource_name_dns_aaaa_record" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsAaaaRecord"></a>

```python
enable_resource_name_dns_aaaa_record: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `enable_resource_name_dns_a_record`<sup>Required</sup> <a name="enable_resource_name_dns_a_record" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.enableResourceNameDnsARecord"></a>

```python
enable_resource_name_dns_a_record: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `hostname_type`<sup>Required</sup> <a name="hostname_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.hostnameType"></a>

```python
hostname_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions">DataAwsccEc2LaunchTemplateLaunchTemplateDataPrivateDnsNameOptions</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.tags"></a>

```python
tags: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecifications</a>

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference <a name="DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags">DataAwsccEc2LaunchTemplateLaunchTemplateDataTagSpecificationsTags</a>

---


### DataAwsccEc2LaunchTemplateTagSpecificationsList <a name="DataAwsccEc2LaunchTemplateTagSpecificationsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference <a name="DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateTagSpecificationsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications">DataAwsccEc2LaunchTemplateTagSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.tags"></a>

```python
tags: DataAwsccEc2LaunchTemplateTagSpecificationsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList">DataAwsccEc2LaunchTemplateTagSpecificationsTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateTagSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecifications">DataAwsccEc2LaunchTemplateTagSpecifications</a>

---


### DataAwsccEc2LaunchTemplateTagSpecificationsTagsList <a name="DataAwsccEc2LaunchTemplateTagSpecificationsTagsList" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference <a name="DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_launch_template

dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags">DataAwsccEc2LaunchTemplateTagSpecificationsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2LaunchTemplateTagSpecificationsTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2LaunchTemplate.DataAwsccEc2LaunchTemplateTagSpecificationsTags">DataAwsccEc2LaunchTemplateTagSpecificationsTags</a>

---



