# `dataAwsccEc2NetworkInsightsPath` Submodule <a name="`dataAwsccEc2NetworkInsightsPath` Submodule" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccEc2NetworkInsightsPath <a name="DataAwsccEc2NetworkInsightsPath" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_insights_path awscc_ec2_network_insights_path}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_insights_path#id DataAwsccEc2NetworkInsightsPath#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsPath resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccEc2NetworkInsightsPath resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccEc2NetworkInsightsPath to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccEc2NetworkInsightsPath that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_insights_path#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccEc2NetworkInsightsPath to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.createdDate">created_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationIp">destination_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationPort">destination_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtDestination">filter_at_destination</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtSource">filter_at_source</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathArn">network_insights_path_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathId">network_insights_path_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceArn">source_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceIp">source_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList">DataAwsccEc2NetworkInsightsPathTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `created_date`<sup>Required</sup> <a name="created_date" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.createdDate"></a>

```python
created_date: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `destination_ip`<sup>Required</sup> <a name="destination_ip" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationIp"></a>

```python
destination_ip: str
```

- *Type:* str

---

##### `destination_port`<sup>Required</sup> <a name="destination_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.destinationPort"></a>

```python
destination_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_at_destination`<sup>Required</sup> <a name="filter_at_destination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtDestination"></a>

```python
filter_at_destination: DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference</a>

---

##### `filter_at_source`<sup>Required</sup> <a name="filter_at_source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.filterAtSource"></a>

```python
filter_at_source: DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference</a>

---

##### `network_insights_path_arn`<sup>Required</sup> <a name="network_insights_path_arn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathArn"></a>

```python
network_insights_path_arn: str
```

- *Type:* str

---

##### `network_insights_path_id`<sup>Required</sup> <a name="network_insights_path_id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.networkInsightsPathId"></a>

```python
network_insights_path_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `source_arn`<sup>Required</sup> <a name="source_arn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceArn"></a>

```python
source_arn: str
```

- *Type:* str

---

##### `source_ip`<sup>Required</sup> <a name="source_ip" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.sourceIp"></a>

```python
source_ip: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tags"></a>

```python
tags: DataAwsccEc2NetworkInsightsPathTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList">DataAwsccEc2NetworkInsightsPathTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPath.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccEc2NetworkInsightsPathConfig <a name="DataAwsccEc2NetworkInsightsPathConfig" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/ec2_network_insights_path#id DataAwsccEc2NetworkInsightsPath#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccEc2NetworkInsightsPathFilterAtDestination <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestination" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination()
```


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange()
```


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange()
```


### DataAwsccEc2NetworkInsightsPathFilterAtSource <a name="DataAwsccEc2NetworkInsightsPathFilterAtSource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource()
```


### DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange()
```


### DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange()
```


### DataAwsccEc2NetworkInsightsPathTags <a name="DataAwsccEc2NetworkInsightsPathTags" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRange</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination">DataAwsccEc2NetworkInsightsPathFilterAtDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationDestinationPortRangeOutputReference</a>

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathFilterAtDestination
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestination">DataAwsccEc2NetworkInsightsPathFilterAtDestination</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtDestinationSourcePortRange</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRange</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress">destination_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange">destination_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress">source_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange">source_port_range</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource">DataAwsccEc2NetworkInsightsPathFilterAtSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_address`<sup>Required</sup> <a name="destination_address" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationAddress"></a>

```python
destination_address: str
```

- *Type:* str

---

##### `destination_port_range`<sup>Required</sup> <a name="destination_port_range" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.destinationPortRange"></a>

```python
destination_port_range: DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceDestinationPortRangeOutputReference</a>

---

##### `source_address`<sup>Required</sup> <a name="source_address" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourceAddress"></a>

```python
source_address: str
```

- *Type:* str

---

##### `source_port_range`<sup>Required</sup> <a name="source_port_range" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.sourcePortRange"></a>

```python
source_port_range: DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathFilterAtSource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSource">DataAwsccEc2NetworkInsightsPathFilterAtSource</a>

---


### DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference <a name="DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange">DataAwsccEc2NetworkInsightsPathFilterAtSourceSourcePortRange</a>

---


### DataAwsccEc2NetworkInsightsPathTagsList <a name="DataAwsccEc2NetworkInsightsPathTagsList" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccEc2NetworkInsightsPathTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccEc2NetworkInsightsPathTagsOutputReference <a name="DataAwsccEc2NetworkInsightsPathTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_ec2_network_insights_path

dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags">DataAwsccEc2NetworkInsightsPathTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccEc2NetworkInsightsPathTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccEc2NetworkInsightsPath.DataAwsccEc2NetworkInsightsPathTags">DataAwsccEc2NetworkInsightsPathTags</a>

---



