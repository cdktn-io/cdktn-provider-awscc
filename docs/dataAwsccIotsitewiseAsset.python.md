# `dataAwsccIotsitewiseAsset` Submodule <a name="`dataAwsccIotsitewiseAsset` Submodule" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccIotsitewiseAsset <a name="DataAwsccIotsitewiseAsset" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset awscc_iotsitewise_asset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset#id DataAwsccIotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccIotsitewiseAsset resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccIotsitewiseAsset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccIotsitewiseAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccIotsitewiseAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccIotsitewiseAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetArn">asset_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetDescription">asset_description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetExternalId">asset_external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetHierarchies">asset_hierarchies</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList">DataAwsccIotsitewiseAssetAssetHierarchiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetModelId">asset_model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetName">asset_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetProperties">asset_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList">DataAwsccIotsitewiseAssetAssetPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList">DataAwsccIotsitewiseAssetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `asset_arn`<sup>Required</sup> <a name="asset_arn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetArn"></a>

```python
asset_arn: str
```

- *Type:* str

---

##### `asset_description`<sup>Required</sup> <a name="asset_description" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetDescription"></a>

```python
asset_description: str
```

- *Type:* str

---

##### `asset_external_id`<sup>Required</sup> <a name="asset_external_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetExternalId"></a>

```python
asset_external_id: str
```

- *Type:* str

---

##### `asset_hierarchies`<sup>Required</sup> <a name="asset_hierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetHierarchies"></a>

```python
asset_hierarchies: DataAwsccIotsitewiseAssetAssetHierarchiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList">DataAwsccIotsitewiseAssetAssetHierarchiesList</a>

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `asset_model_id`<sup>Required</sup> <a name="asset_model_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetModelId"></a>

```python
asset_model_id: str
```

- *Type:* str

---

##### `asset_name`<sup>Required</sup> <a name="asset_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetName"></a>

```python
asset_name: str
```

- *Type:* str

---

##### `asset_properties`<sup>Required</sup> <a name="asset_properties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.assetProperties"></a>

```python
asset_properties: DataAwsccIotsitewiseAssetAssetPropertiesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList">DataAwsccIotsitewiseAssetAssetPropertiesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tags"></a>

```python
tags: DataAwsccIotsitewiseAssetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList">DataAwsccIotsitewiseAssetTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccIotsitewiseAssetAssetHierarchies <a name="DataAwsccIotsitewiseAssetAssetHierarchies" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies()
```


### DataAwsccIotsitewiseAssetAssetProperties <a name="DataAwsccIotsitewiseAssetAssetProperties" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties()
```


### DataAwsccIotsitewiseAssetConfig <a name="DataAwsccIotsitewiseAssetConfig" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/iotsitewise_asset#id DataAwsccIotsitewiseAsset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccIotsitewiseAssetTags <a name="DataAwsccIotsitewiseAssetTags" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccIotsitewiseAssetAssetHierarchiesList <a name="DataAwsccIotsitewiseAssetAssetHierarchiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference <a name="DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId">child_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId">logical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies">DataAwsccIotsitewiseAssetAssetHierarchies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `child_asset_id`<sup>Required</sup> <a name="child_asset_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.childAssetId"></a>

```python
child_asset_id: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logical_id`<sup>Required</sup> <a name="logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.logicalId"></a>

```python
logical_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAssetAssetHierarchies
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetHierarchies">DataAwsccIotsitewiseAssetAssetHierarchies</a>

---


### DataAwsccIotsitewiseAssetAssetPropertiesList <a name="DataAwsccIotsitewiseAssetAssetPropertiesList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotsitewiseAssetAssetPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotsitewiseAssetAssetPropertiesOutputReference <a name="DataAwsccIotsitewiseAssetAssetPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.logicalId">logical_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.notificationState">notification_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties">DataAwsccIotsitewiseAssetAssetProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `logical_id`<sup>Required</sup> <a name="logical_id" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.logicalId"></a>

```python
logical_id: str
```

- *Type:* str

---

##### `notification_state`<sup>Required</sup> <a name="notification_state" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.notificationState"></a>

```python
notification_state: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAssetAssetProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetAssetProperties">DataAwsccIotsitewiseAssetAssetProperties</a>

---


### DataAwsccIotsitewiseAssetTagsList <a name="DataAwsccIotsitewiseAssetTagsList" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccIotsitewiseAssetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccIotsitewiseAssetTagsOutputReference <a name="DataAwsccIotsitewiseAssetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_iotsitewise_asset

dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags">DataAwsccIotsitewiseAssetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccIotsitewiseAssetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccIotsitewiseAsset.DataAwsccIotsitewiseAssetTags">DataAwsccIotsitewiseAssetTags</a>

---



