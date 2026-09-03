# `dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule <a name="`dataAwsccGuarddutyCustomDetectionRuleAssociation` Submodule" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociation <a name="DataAwsccGuarddutyCustomDetectionRuleAssociation" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association awscc_guardduty_custom_detection_rule_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association#id DataAwsccGuarddutyCustomDetectionRuleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccGuarddutyCustomDetectionRuleAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccGuarddutyCustomDetectionRuleAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccGuarddutyCustomDetectionRuleAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccGuarddutyCustomDetectionRuleAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId">rule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `rule_id`<sup>Required</sup> <a name="rule_id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.ruleId"></a>

```python
rule_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tags"></a>

```python
tags: DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList">DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationConfig <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationConfig" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/guardduty_custom_detection_rule_association#id DataAwsccGuarddutyCustomDetectionRuleAssociation#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccGuarddutyCustomDetectionRuleAssociationTags <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTags" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference <a name="DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_guardduty_custom_detection_rule_association

dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccGuarddutyCustomDetectionRuleAssociationTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccGuarddutyCustomDetectionRuleAssociation.DataAwsccGuarddutyCustomDetectionRuleAssociationTags">DataAwsccGuarddutyCustomDetectionRuleAssociationTags</a>

---



