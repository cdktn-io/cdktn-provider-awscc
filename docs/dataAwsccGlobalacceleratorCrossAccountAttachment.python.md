# `dataAwsccGlobalacceleratorCrossAccountAttachment` Submodule <a name="`dataAwsccGlobalacceleratorCrossAccountAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachment <a name="DataAwsccGlobalacceleratorCrossAccountAttachment" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment awscc_globalaccelerator_cross_account_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment#id DataAwsccGlobalacceleratorCrossAccountAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGlobalacceleratorCrossAccountAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGlobalacceleratorCrossAccountAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGlobalacceleratorCrossAccountAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGlobalacceleratorCrossAccountAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.attachmentArn">attachment_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.principals">principals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList">DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList">DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attachment_arn`<sup>Required</sup> <a name="attachment_arn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.attachmentArn"></a>

```python
attachment_arn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `principals`<sup>Required</sup> <a name="principals" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.principals"></a>

```python
principals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.resources"></a>

```python
resources: DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList">DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tags"></a>

```python
tags: DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList">DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachmentConfig <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/globalaccelerator_cross_account_attachment#id DataAwsccGlobalacceleratorCrossAccountAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGlobalacceleratorCrossAccountAttachmentResources <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResources" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources()
```


### DataAwsccGlobalacceleratorCrossAccountAttachmentTags <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTags" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources">DataAwsccGlobalacceleratorCrossAccountAttachmentResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlobalacceleratorCrossAccountAttachmentResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentResources">DataAwsccGlobalacceleratorCrossAccountAttachmentResources</a>

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference <a name="DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_globalaccelerator_cross_account_attachment

dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags">DataAwsccGlobalacceleratorCrossAccountAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGlobalacceleratorCrossAccountAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGlobalacceleratorCrossAccountAttachment.DataAwsccGlobalacceleratorCrossAccountAttachmentTags">DataAwsccGlobalacceleratorCrossAccountAttachmentTags</a>

---



