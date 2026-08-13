# `dataAwsccCloudtrailTrail` Submodule <a name="`dataAwsccCloudtrailTrail` Submodule" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccCloudtrailTrail <a name="DataAwsccCloudtrailTrail" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail awscc_cloudtrail_trail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail#id DataAwsccCloudtrailTrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccCloudtrailTrail resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccCloudtrailTrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccCloudtrailTrail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccCloudtrailTrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccCloudtrailTrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.advancedEventSelectors">advanced_event_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.aggregationConfigurations">aggregation_configurations</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList">DataAwsccCloudtrailTrailAggregationConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsLogGroupArn">cloudwatch_logs_log_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsRoleArn">cloudwatch_logs_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.enableLogFileValidation">enable_log_file_validation</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.eventSelectors">event_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList">DataAwsccCloudtrailTrailEventSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.includeGlobalServiceEvents">include_global_service_events</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.insightSelectors">insight_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList">DataAwsccCloudtrailTrailInsightSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isLogging">is_logging</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isMultiRegionTrail">is_multi_region_trail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isOrganizationTrail">is_organization_trail</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3BucketName">s3_bucket_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3KeyPrefix">s3_key_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicArn">sns_topic_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicName">sns_topic_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList">DataAwsccCloudtrailTrailTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.trailName">trail_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `advanced_event_selectors`<sup>Required</sup> <a name="advanced_event_selectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.advancedEventSelectors"></a>

```python
advanced_event_selectors: DataAwsccCloudtrailTrailAdvancedEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsList</a>

---

##### `aggregation_configurations`<sup>Required</sup> <a name="aggregation_configurations" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.aggregationConfigurations"></a>

```python
aggregation_configurations: DataAwsccCloudtrailTrailAggregationConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList">DataAwsccCloudtrailTrailAggregationConfigurationsList</a>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `cloudwatch_logs_log_group_arn`<sup>Required</sup> <a name="cloudwatch_logs_log_group_arn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsLogGroupArn"></a>

```python
cloudwatch_logs_log_group_arn: str
```

- *Type:* str

---

##### `cloudwatch_logs_role_arn`<sup>Required</sup> <a name="cloudwatch_logs_role_arn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.cloudwatchLogsRoleArn"></a>

```python
cloudwatch_logs_role_arn: str
```

- *Type:* str

---

##### `enable_log_file_validation`<sup>Required</sup> <a name="enable_log_file_validation" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.enableLogFileValidation"></a>

```python
enable_log_file_validation: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `event_selectors`<sup>Required</sup> <a name="event_selectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.eventSelectors"></a>

```python
event_selectors: DataAwsccCloudtrailTrailEventSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList">DataAwsccCloudtrailTrailEventSelectorsList</a>

---

##### `include_global_service_events`<sup>Required</sup> <a name="include_global_service_events" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.includeGlobalServiceEvents"></a>

```python
include_global_service_events: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `insight_selectors`<sup>Required</sup> <a name="insight_selectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.insightSelectors"></a>

```python
insight_selectors: DataAwsccCloudtrailTrailInsightSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList">DataAwsccCloudtrailTrailInsightSelectorsList</a>

---

##### `is_logging`<sup>Required</sup> <a name="is_logging" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isLogging"></a>

```python
is_logging: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_multi_region_trail`<sup>Required</sup> <a name="is_multi_region_trail" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isMultiRegionTrail"></a>

```python
is_multi_region_trail: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `is_organization_trail`<sup>Required</sup> <a name="is_organization_trail" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.isOrganizationTrail"></a>

```python
is_organization_trail: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `s3_bucket_name`<sup>Required</sup> <a name="s3_bucket_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3BucketName"></a>

```python
s3_bucket_name: str
```

- *Type:* str

---

##### `s3_key_prefix`<sup>Required</sup> <a name="s3_key_prefix" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.s3KeyPrefix"></a>

```python
s3_key_prefix: str
```

- *Type:* str

---

##### `sns_topic_arn`<sup>Required</sup> <a name="sns_topic_arn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicArn"></a>

```python
sns_topic_arn: str
```

- *Type:* str

---

##### `sns_topic_name`<sup>Required</sup> <a name="sns_topic_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.snsTopicName"></a>

```python
sns_topic_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tags"></a>

```python
tags: DataAwsccCloudtrailTrailTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList">DataAwsccCloudtrailTrailTagsList</a>

---

##### `trail_name`<sup>Required</sup> <a name="trail_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.trailName"></a>

```python
trail_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccCloudtrailTrailAdvancedEventSelectors <a name="DataAwsccCloudtrailTrailAdvancedEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors()
```


### DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors()
```


### DataAwsccCloudtrailTrailAggregationConfigurations <a name="DataAwsccCloudtrailTrailAggregationConfigurations" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations()
```


### DataAwsccCloudtrailTrailConfig <a name="DataAwsccCloudtrailTrailConfig" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/cloudtrail_trail#id DataAwsccCloudtrailTrail#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccCloudtrailTrailEventSelectors <a name="DataAwsccCloudtrailTrailEventSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors()
```


### DataAwsccCloudtrailTrailEventSelectorsDataResources <a name="DataAwsccCloudtrailTrailEventSelectorsDataResources" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources()
```


### DataAwsccCloudtrailTrailInsightSelectors <a name="DataAwsccCloudtrailTrailInsightSelectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors()
```


### DataAwsccCloudtrailTrailTags <a name="DataAwsccCloudtrailTrailTags" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith">ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo">equal_to</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith">not_ends_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals">not_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith">not_starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith">starts_with</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ends_with`<sup>Required</sup> <a name="ends_with" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.endsWith"></a>

```python
ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `equal_to`<sup>Required</sup> <a name="equal_to" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.equalTo"></a>

```python
equal_to: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `not_ends_with`<sup>Required</sup> <a name="not_ends_with" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEndsWith"></a>

```python
not_ends_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_equals`<sup>Required</sup> <a name="not_equals" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notEquals"></a>

```python
not_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `not_starts_with`<sup>Required</sup> <a name="not_starts_with" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.notStartsWith"></a>

```python
not_starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.startsWith"></a>

```python
starts_with: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectors</a>

---


### DataAwsccCloudtrailTrailAdvancedEventSelectorsList <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference <a name="DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors">field_selectors</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_selectors`<sup>Required</sup> <a name="field_selectors" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.fieldSelectors"></a>

```python
field_selectors: DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList">DataAwsccCloudtrailTrailAdvancedEventSelectorsFieldSelectorsList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailAdvancedEventSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAdvancedEventSelectors">DataAwsccCloudtrailTrailAdvancedEventSelectors</a>

---


### DataAwsccCloudtrailTrailAggregationConfigurationsList <a name="DataAwsccCloudtrailTrailAggregationConfigurationsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference <a name="DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory">event_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.templates">templates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations">DataAwsccCloudtrailTrailAggregationConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_category`<sup>Required</sup> <a name="event_category" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.eventCategory"></a>

```python
event_category: str
```

- *Type:* str

---

##### `templates`<sup>Required</sup> <a name="templates" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.templates"></a>

```python
templates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailAggregationConfigurations
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailAggregationConfigurations">DataAwsccCloudtrailTrailAggregationConfigurations</a>

---


### DataAwsccCloudtrailTrailEventSelectorsDataResourcesList <a name="DataAwsccCloudtrailTrailEventSelectorsDataResourcesList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference <a name="DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources">DataAwsccCloudtrailTrailEventSelectorsDataResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailEventSelectorsDataResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResources">DataAwsccCloudtrailTrailEventSelectorsDataResources</a>

---


### DataAwsccCloudtrailTrailEventSelectorsList <a name="DataAwsccCloudtrailTrailEventSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailEventSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailEventSelectorsOutputReference <a name="DataAwsccCloudtrailTrailEventSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.dataResources">data_resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList">DataAwsccCloudtrailTrailEventSelectorsDataResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources">exclude_management_event_sources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents">include_management_events</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.readWriteType">read_write_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors">DataAwsccCloudtrailTrailEventSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data_resources`<sup>Required</sup> <a name="data_resources" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.dataResources"></a>

```python
data_resources: DataAwsccCloudtrailTrailEventSelectorsDataResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsDataResourcesList">DataAwsccCloudtrailTrailEventSelectorsDataResourcesList</a>

---

##### `exclude_management_event_sources`<sup>Required</sup> <a name="exclude_management_event_sources" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.excludeManagementEventSources"></a>

```python
exclude_management_event_sources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `include_management_events`<sup>Required</sup> <a name="include_management_events" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.includeManagementEvents"></a>

```python
include_management_events: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `read_write_type`<sup>Required</sup> <a name="read_write_type" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.readWriteType"></a>

```python
read_write_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailEventSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailEventSelectors">DataAwsccCloudtrailTrailEventSelectors</a>

---


### DataAwsccCloudtrailTrailInsightSelectorsList <a name="DataAwsccCloudtrailTrailInsightSelectorsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailInsightSelectorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailInsightSelectorsOutputReference <a name="DataAwsccCloudtrailTrailInsightSelectorsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.eventCategories">event_categories</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.insightType">insight_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors">DataAwsccCloudtrailTrailInsightSelectors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_categories`<sup>Required</sup> <a name="event_categories" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.eventCategories"></a>

```python
event_categories: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `insight_type`<sup>Required</sup> <a name="insight_type" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.insightType"></a>

```python
insight_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectorsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailInsightSelectors
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailInsightSelectors">DataAwsccCloudtrailTrailInsightSelectors</a>

---


### DataAwsccCloudtrailTrailTagsList <a name="DataAwsccCloudtrailTrailTagsList" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccCloudtrailTrailTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccCloudtrailTrailTagsOutputReference <a name="DataAwsccCloudtrailTrailTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_cloudtrail_trail

dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags">DataAwsccCloudtrailTrailTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccCloudtrailTrailTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccCloudtrailTrail.DataAwsccCloudtrailTrailTags">DataAwsccCloudtrailTrailTags</a>

---



