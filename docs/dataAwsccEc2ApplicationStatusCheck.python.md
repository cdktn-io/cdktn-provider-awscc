# `dataAwsccEc2ApplicationStatusCheck` Submodule <a name="`dataAwsccEc2ApplicationStatusCheck` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2ApplicationStatusCheck <a name="DataAwsccEc2ApplicationStatusCheck" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check awscc_ec2_application_status_check}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#id DataAwsccEc2ApplicationStatusCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2ApplicationStatusCheck resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2ApplicationStatusCheck to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2ApplicationStatusCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2ApplicationStatusCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.aggregation">aggregation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.applicationStatusCheckId">application_status_check_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.creationTime">creation_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.deviceIndex">device_index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.failureThreshold">failure_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.healthCheckPaths">health_check_paths</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.initializationGracePeriodSeconds">initialization_grace_period_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipScope">ip_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.statusCodeMatcher">status_code_matcher</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.successThreshold">success_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList">DataAwsccEc2ApplicationStatusCheckTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `aggregation`<sup>Required</sup> <a name="aggregation" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.aggregation"></a>

```python
aggregation: str
```

- *Type:* str

---

##### `application_status_check_id`<sup>Required</sup> <a name="application_status_check_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.applicationStatusCheckId"></a>

```python
application_status_check_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `creation_time`<sup>Required</sup> <a name="creation_time" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.creationTime"></a>

```python
creation_time: str
```

- *Type:* str

---

##### `device_index`<sup>Required</sup> <a name="device_index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.deviceIndex"></a>

```python
device_index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `failure_threshold`<sup>Required</sup> <a name="failure_threshold" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.failureThreshold"></a>

```python
failure_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_paths`<sup>Required</sup> <a name="health_check_paths" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.healthCheckPaths"></a>

```python
health_check_paths: DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList</a>

---

##### `initialization_grace_period_seconds`<sup>Required</sup> <a name="initialization_grace_period_seconds" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.initializationGracePeriodSeconds"></a>

```python
initialization_grace_period_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_scope`<sup>Required</sup> <a name="ip_scope" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipScope"></a>

```python
ip_scope: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `status_code_matcher`<sup>Required</sup> <a name="status_code_matcher" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.statusCodeMatcher"></a>

```python
status_code_matcher: str
```

- *Type:* str

---

##### `success_threshold`<sup>Required</sup> <a name="success_threshold" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.successThreshold"></a>

```python
success_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tags"></a>

```python
tags: DataAwsccEc2ApplicationStatusCheckTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList">DataAwsccEc2ApplicationStatusCheckTagsList</a>

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheck.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2ApplicationStatusCheckConfig <a name="DataAwsccEc2ApplicationStatusCheckConfig" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.101.0/docs/data-sources/ec2_application_status_check#id DataAwsccEc2ApplicationStatusCheck#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2ApplicationStatusCheckHealthCheckPaths <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPaths" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths()
```


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations()
```


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource()
```


### DataAwsccEc2ApplicationStatusCheckTags <a name="DataAwsccEc2ApplicationStatusCheckTags" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinations</a>

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations">destinations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths">DataAwsccEc2ApplicationStatusCheckHealthCheckPaths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.destinations"></a>

```python
destinations: DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsDestinationsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.source"></a>

```python
source: DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ApplicationStatusCheckHealthCheckPaths
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPaths">DataAwsccEc2ApplicationStatusCheckHealthCheckPaths</a>

---


### DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference <a name="DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId">security_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `security_group_id`<sup>Required</sup> <a name="security_group_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.securityGroupId"></a>

```python
security_group_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource">DataAwsccEc2ApplicationStatusCheckHealthCheckPathsSource</a>

---


### DataAwsccEc2ApplicationStatusCheckTagsList <a name="DataAwsccEc2ApplicationStatusCheckTagsList" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2ApplicationStatusCheckTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2ApplicationStatusCheckTagsOutputReference <a name="DataAwsccEc2ApplicationStatusCheckTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_application_status_check

dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags">DataAwsccEc2ApplicationStatusCheckTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2ApplicationStatusCheckTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2ApplicationStatusCheck.DataAwsccEc2ApplicationStatusCheckTags">DataAwsccEc2ApplicationStatusCheckTags</a>

---



