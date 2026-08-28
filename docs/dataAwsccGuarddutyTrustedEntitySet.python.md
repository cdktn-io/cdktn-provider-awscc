# `dataAwsccGuarddutyTrustedEntitySet` Submodule <a name="`dataAwsccGuarddutyTrustedEntitySet` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyTrustedEntitySet <a name="DataAwsccGuarddutyTrustedEntitySet" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_trusted_entity_set awscc_guardduty_trusted_entity_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_trusted_entity_set#id DataAwsccGuarddutyTrustedEntitySet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGuarddutyTrustedEntitySet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGuarddutyTrustedEntitySet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGuarddutyTrustedEntitySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_trusted_entity_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyTrustedEntitySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.activate">activate</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.detectorId">detector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.errorDetails">error_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.expectedBucketOwner">expected_bucket_owner</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList">DataAwsccGuarddutyTrustedEntitySetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.trustedEntitySetId">trusted_entity_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `activate`<sup>Required</sup> <a name="activate" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.activate"></a>

```python
activate: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `detector_id`<sup>Required</sup> <a name="detector_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.detectorId"></a>

```python
detector_id: str
```

- *Type:* str

---

##### `error_details`<sup>Required</sup> <a name="error_details" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.errorDetails"></a>

```python
error_details: str
```

- *Type:* str

---

##### `expected_bucket_owner`<sup>Required</sup> <a name="expected_bucket_owner" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.expectedBucketOwner"></a>

```python
expected_bucket_owner: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.tags"></a>

```python
tags: DataAwsccGuarddutyTrustedEntitySetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList">DataAwsccGuarddutyTrustedEntitySetTagsList</a>

---

##### `trusted_entity_set_id`<sup>Required</sup> <a name="trusted_entity_set_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.trustedEntitySetId"></a>

```python
trusted_entity_set_id: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyTrustedEntitySetConfig <a name="DataAwsccGuarddutyTrustedEntitySetConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/data-sources/guardduty_trusted_entity_set#id DataAwsccGuarddutyTrustedEntitySet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyTrustedEntitySetTags <a name="DataAwsccGuarddutyTrustedEntitySetTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyTrustedEntitySetTagsList <a name="DataAwsccGuarddutyTrustedEntitySetTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGuarddutyTrustedEntitySetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGuarddutyTrustedEntitySetTagsOutputReference <a name="DataAwsccGuarddutyTrustedEntitySetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_trusted_entity_set

dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTags">DataAwsccGuarddutyTrustedEntitySetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyTrustedEntitySetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyTrustedEntitySet.DataAwsccGuarddutyTrustedEntitySetTags">DataAwsccGuarddutyTrustedEntitySetTags</a>

---



