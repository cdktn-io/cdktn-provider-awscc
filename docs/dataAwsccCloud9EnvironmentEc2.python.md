# `dataAwsccCloud9EnvironmentEc2` Submodule <a name="`dataAwsccCloud9EnvironmentEc2` Submodule" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloud9EnvironmentEc2 <a name="DataAwsccCloud9EnvironmentEc2" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloud9_environment_ec2 awscc_cloud9_environment_ec2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloud9_environment_ec2#id DataAwsccCloud9EnvironmentEc2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloud9EnvironmentEc2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloud9EnvironmentEc2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloud9EnvironmentEc2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloud9_environment_ec2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloud9EnvironmentEc2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.automaticStopTimeMinutes">automatic_stop_time_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.environmentId">environment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.ownerArn">owner_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.repositories">repositories</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList">DataAwsccCloud9EnvironmentEc2RepositoriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList">DataAwsccCloud9EnvironmentEc2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `automatic_stop_time_minutes`<sup>Required</sup> <a name="automatic_stop_time_minutes" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.automaticStopTimeMinutes"></a>

```python
automatic_stop_time_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `environment_id`<sup>Required</sup> <a name="environment_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.environmentId"></a>

```python
environment_id: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owner_arn`<sup>Required</sup> <a name="owner_arn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.ownerArn"></a>

```python
owner_arn: str
```

- *Type:* str

---

##### `repositories`<sup>Required</sup> <a name="repositories" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.repositories"></a>

```python
repositories: DataAwsccCloud9EnvironmentEc2RepositoriesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList">DataAwsccCloud9EnvironmentEc2RepositoriesList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.tags"></a>

```python
tags: DataAwsccCloud9EnvironmentEc2TagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList">DataAwsccCloud9EnvironmentEc2TagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloud9EnvironmentEc2Config <a name="DataAwsccCloud9EnvironmentEc2Config" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/data-sources/cloud9_environment_ec2#id DataAwsccCloud9EnvironmentEc2#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloud9EnvironmentEc2Repositories <a name="DataAwsccCloud9EnvironmentEc2Repositories" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Repositories"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Repositories.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Repositories()
```


### DataAwsccCloud9EnvironmentEc2Tags <a name="DataAwsccCloud9EnvironmentEc2Tags" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Tags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Tags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloud9EnvironmentEc2RepositoriesList <a name="DataAwsccCloud9EnvironmentEc2RepositoriesList" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference <a name="DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent">path_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl">repository_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Repositories">DataAwsccCloud9EnvironmentEc2Repositories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `path_component`<sup>Required</sup> <a name="path_component" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.pathComponent"></a>

```python
path_component: str
```

- *Type:* str

---

##### `repository_url`<sup>Required</sup> <a name="repository_url" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.repositoryUrl"></a>

```python
repository_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2RepositoriesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloud9EnvironmentEc2Repositories
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Repositories">DataAwsccCloud9EnvironmentEc2Repositories</a>

---


### DataAwsccCloud9EnvironmentEc2TagsList <a name="DataAwsccCloud9EnvironmentEc2TagsList" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloud9EnvironmentEc2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloud9EnvironmentEc2TagsOutputReference <a name="DataAwsccCloud9EnvironmentEc2TagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloud9_environment_ec2

dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Tags">DataAwsccCloud9EnvironmentEc2Tags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2TagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloud9EnvironmentEc2Tags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloud9EnvironmentEc2.DataAwsccCloud9EnvironmentEc2Tags">DataAwsccCloud9EnvironmentEc2Tags</a>

---



