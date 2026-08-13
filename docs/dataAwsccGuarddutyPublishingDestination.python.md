# `dataAwsccGuarddutyPublishingDestination` Submodule <a name="`dataAwsccGuarddutyPublishingDestination` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyPublishingDestination <a name="DataAwsccGuarddutyPublishingDestination" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_publishing_destination awscc_guardduty_publishing_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_publishing_destination#id DataAwsccGuarddutyPublishingDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyPublishingDestination resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGuarddutyPublishingDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGuarddutyPublishingDestination to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGuarddutyPublishingDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_publishing_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyPublishingDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.destinationProperties">destination_properties</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference">DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.destinationType">destination_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.publishingDestinationId">publishing_destination_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.publishingFailureStartTimestamp">publishing_failure_start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList">DataAwsccGuarddutyPublishingDestinationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `destination_properties`<sup>Required</sup> <a name="destination_properties" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.destinationProperties"></a>

```python
destination_properties: DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference">DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference</a>

---

##### `destination_type`<sup>Required</sup> <a name="destination_type" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.destinationType"></a>

```python
destination_type: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `publishing_destination_id`<sup>Required</sup> <a name="publishing_destination_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.publishingDestinationId"></a>

```python
publishing_destination_id: str
```

- *Type:* str

---

##### `publishing_failure_start_timestamp`<sup>Required</sup> <a name="publishing_failure_start_timestamp" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.publishingFailureStartTimestamp"></a>

```python
publishing_failure_start_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.tags"></a>

```python
tags: DataAwsccGuarddutyPublishingDestinationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList">DataAwsccGuarddutyPublishingDestinationTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestination.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyPublishingDestinationConfig <a name="DataAwsccGuarddutyPublishingDestinationConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/guardduty_publishing_destination#id DataAwsccGuarddutyPublishingDestination#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyPublishingDestinationDestinationProperties <a name="DataAwsccGuarddutyPublishingDestinationDestinationProperties" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationProperties.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationProperties()
```


### DataAwsccGuarddutyPublishingDestinationTags <a name="DataAwsccGuarddutyPublishingDestinationTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference <a name="DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArn">destination_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArn">kms_key_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationProperties">DataAwsccGuarddutyPublishingDestinationDestinationProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_arn`<sup>Required</sup> <a name="destination_arn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.destinationArn"></a>

```python
destination_arn: str
```

- *Type:* str

---

##### `kms_key_arn`<sup>Required</sup> <a name="kms_key_arn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.kmsKeyArn"></a>

```python
kms_key_arn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyPublishingDestinationDestinationProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationDestinationProperties">DataAwsccGuarddutyPublishingDestinationDestinationProperties</a>

---


### DataAwsccGuarddutyPublishingDestinationTagsList <a name="DataAwsccGuarddutyPublishingDestinationTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGuarddutyPublishingDestinationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGuarddutyPublishingDestinationTagsOutputReference <a name="DataAwsccGuarddutyPublishingDestinationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_publishing_destination

dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTags">DataAwsccGuarddutyPublishingDestinationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyPublishingDestinationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyPublishingDestination.DataAwsccGuarddutyPublishingDestinationTags">DataAwsccGuarddutyPublishingDestinationTags</a>

---



