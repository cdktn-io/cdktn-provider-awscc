# `dataAwsccElasticloadbalancingv2ListenerRule` Submodule <a name="`dataAwsccElasticloadbalancingv2ListenerRule` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2ListenerRule <a name="DataAwsccElasticloadbalancingv2ListenerRule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancingv2_listener_rule awscc_elasticloadbalancingv2_listener_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancingv2_listener_rule#id DataAwsccElasticloadbalancingv2ListenerRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2ListenerRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2ListenerRule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccElasticloadbalancingv2ListenerRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancingv2_listener_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2ListenerRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList">DataAwsccElasticloadbalancingv2ListenerRuleActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList">DataAwsccElasticloadbalancingv2ListenerRuleConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.listenerArn">listener_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.ruleArn">rule_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList">DataAwsccElasticloadbalancingv2ListenerRuleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.transforms">transforms</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList">DataAwsccElasticloadbalancingv2ListenerRuleTransformsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.actions"></a>

```python
actions: DataAwsccElasticloadbalancingv2ListenerRuleActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList">DataAwsccElasticloadbalancingv2ListenerRuleActionsList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.conditions"></a>

```python
conditions: DataAwsccElasticloadbalancingv2ListenerRuleConditionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList">DataAwsccElasticloadbalancingv2ListenerRuleConditionsList</a>

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `listener_arn`<sup>Required</sup> <a name="listener_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.listenerArn"></a>

```python
listener_arn: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rule_arn`<sup>Required</sup> <a name="rule_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.ruleArn"></a>

```python
rule_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.tags"></a>

```python
tags: DataAwsccElasticloadbalancingv2ListenerRuleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList">DataAwsccElasticloadbalancingv2ListenerRuleTagsList</a>

---

##### `transforms`<sup>Required</sup> <a name="transforms" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.transforms"></a>

```python
transforms: DataAwsccElasticloadbalancingv2ListenerRuleTransformsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList">DataAwsccElasticloadbalancingv2ListenerRuleTransformsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2ListenerRuleActions <a name="DataAwsccElasticloadbalancingv2ListenerRuleActions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActions()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims()
```


### DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditions <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditions" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditions.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditions()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/elasticloadbalancingv2_listener_rule#id DataAwsccElasticloadbalancingv2ListenerRule#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2ListenerRuleTags <a name="DataAwsccElasticloadbalancingv2ListenerRuleTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTags()
```


### DataAwsccElasticloadbalancingv2ListenerRuleTransforms <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransforms" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransforms"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransforms.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransforms()
```


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites()
```


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig()
```


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">user_pool_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">user_pool_client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">user_pool_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktn.StringMap

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_pool_arn`<sup>Required</sup> <a name="user_pool_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```python
user_pool_arn: str
```

- *Type:* str

---

##### `user_pool_client_id`<sup>Required</sup> <a name="user_pool_client_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```python
user_pool_client_id: str
```

- *Type:* str

---

##### `user_pool_domain`<sup>Required</sup> <a name="user_pool_domain" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```python
user_pool_domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authentication_request_extra_params</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret">client_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">on_unauthenticated_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">session_cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">token_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">use_existing_client_secret</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">user_info_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authentication_request_extra_params`<sup>Required</sup> <a name="authentication_request_extra_params" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```python
authentication_request_extra_params: StringMap
```

- *Type:* cdktn.StringMap

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `client_secret`<sup>Required</sup> <a name="client_secret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```python
client_secret: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `on_unauthenticated_request`<sup>Required</sup> <a name="on_unauthenticated_request" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```python
on_unauthenticated_request: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `session_cookie_name`<sup>Required</sup> <a name="session_cookie_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```python
session_cookie_name: str
```

- *Type:* str

---

##### `session_timeout`<sup>Required</sup> <a name="session_timeout" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```python
session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `token_endpoint`<sup>Required</sup> <a name="token_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```python
token_endpoint: str
```

- *Type:* str

---

##### `use_existing_client_secret`<sup>Required</sup> <a name="use_existing_client_secret" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```python
use_existing_client_secret: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `user_info_endpoint`<sup>Required</sup> <a name="user_info_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```python
user_info_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody">message_body</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `message_body`<sup>Required</sup> <a name="message_body" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```python
message_body: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups">target_groups</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">target_group_stickiness_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_groups`<sup>Required</sup> <a name="target_groups" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroups"></a>

```python
target_groups: DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList</a>

---

##### `target_group_stickiness_config`<sup>Required</sup> <a name="target_group_stickiness_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```python
target_group_stickiness_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroups</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">duration_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_seconds`<sup>Required</sup> <a name="duration_seconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```python
duration_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigTargetGroupStickinessConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaims</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims">additional_claims</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwks_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_claims`<sup>Required</sup> <a name="additional_claims" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```python
additional_claims: DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `jwks_endpoint`<sup>Required</sup> <a name="jwks_endpoint" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```python
jwks_endpoint: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsList <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig">authenticate_cognito_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig">authenticate_oidc_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig">fixed_response_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig">forward_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig">jwt_validation_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.order">order</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig">redirect_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActions">DataAwsccElasticloadbalancingv2ListenerRuleActions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authenticate_cognito_config`<sup>Required</sup> <a name="authenticate_cognito_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateCognitoConfig"></a>

```python
authenticate_cognito_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticate_oidc_config`<sup>Required</sup> <a name="authenticate_oidc_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.authenticateOidcConfig"></a>

```python
authenticate_oidc_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixed_response_config`<sup>Required</sup> <a name="fixed_response_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.fixedResponseConfig"></a>

```python
fixed_response_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsFixedResponseConfigOutputReference</a>

---

##### `forward_config`<sup>Required</sup> <a name="forward_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.forwardConfig"></a>

```python
forward_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsForwardConfigOutputReference</a>

---

##### `jwt_validation_config`<sup>Required</sup> <a name="jwt_validation_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.jwtValidationConfig"></a>

```python
jwt_validation_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsJwtValidationConfigOutputReference</a>

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.order"></a>

```python
order: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_config`<sup>Required</sup> <a name="redirect_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.redirectConfig"></a>

```python
redirect_config: DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference</a>

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActions">DataAwsccElasticloadbalancingv2ListenerRuleActions</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode">status_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.host"></a>

```python
host: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.port"></a>

```python
port: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.statusCode"></a>

```python
status_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig">DataAwsccElasticloadbalancingv2ListenerRuleActionsRedirectConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName">http_header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `http_header_name`<sup>Required</sup> <a name="http_header_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.httpHeaderName"></a>

```python
http_header_name: str
```

- *Type:* str

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsList <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field">field</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig">host_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig">http_header_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig">http_request_method_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig">path_pattern_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig">query_string_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig">source_ip_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditions">DataAwsccElasticloadbalancingv2ListenerRuleConditions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field`<sup>Required</sup> <a name="field" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.field"></a>

```python
field: str
```

- *Type:* str

---

##### `host_header_config`<sup>Required</sup> <a name="host_header_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.hostHeaderConfig"></a>

```python
host_header_config: DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHostHeaderConfigOutputReference</a>

---

##### `http_header_config`<sup>Required</sup> <a name="http_header_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpHeaderConfig"></a>

```python
http_header_config: DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpHeaderConfigOutputReference</a>

---

##### `http_request_method_config`<sup>Required</sup> <a name="http_request_method_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.httpRequestMethodConfig"></a>

```python
http_request_method_config: DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsHttpRequestMethodConfigOutputReference</a>

---

##### `path_pattern_config`<sup>Required</sup> <a name="path_pattern_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.pathPatternConfig"></a>

```python
path_pattern_config: DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference</a>

---

##### `query_string_config`<sup>Required</sup> <a name="query_string_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.queryStringConfig"></a>

```python
query_string_config: DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference</a>

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_ip_config`<sup>Required</sup> <a name="source_ip_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.sourceIpConfig"></a>

```python
source_ip_config: DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditions
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditions">DataAwsccElasticloadbalancingv2ListenerRuleConditions</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues">regex_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex_values`<sup>Required</sup> <a name="regex_values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.regexValues"></a>

```python
regex_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsPathPatternConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values">values</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.values"></a>

```python
values: DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValuesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues">DataAwsccElasticloadbalancingv2ListenerRuleConditionsQueryStringConfigValues</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig">DataAwsccElasticloadbalancingv2ListenerRuleConditionsSourceIpConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleTagsList <a name="DataAwsccElasticloadbalancingv2ListenerRuleTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTags">DataAwsccElasticloadbalancingv2ListenerRuleTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTags">DataAwsccElasticloadbalancingv2ListenerRuleTags</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.rewrites"></a>

```python
rewrites: DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace">replace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.replace"></a>

```python
replace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewritesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigRewrites</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsList <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig">host_header_rewrite_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig">url_rewrite_config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransforms">DataAwsccElasticloadbalancingv2ListenerRuleTransforms</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_header_rewrite_config`<sup>Required</sup> <a name="host_header_rewrite_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.hostHeaderRewriteConfig"></a>

```python
host_header_rewrite_config: DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleTransformsHostHeaderRewriteConfigOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url_rewrite_config`<sup>Required</sup> <a name="url_rewrite_config" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.urlRewriteConfig"></a>

```python
url_rewrite_config: DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleTransforms
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransforms">DataAwsccElasticloadbalancingv2ListenerRuleTransforms</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites">rewrites</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rewrites`<sup>Required</sup> <a name="rewrites" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.rewrites"></a>

```python
rewrites: DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfig</a>

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference <a name="DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_listener_rule

dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex">regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace">replace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.regex"></a>

```python
regex: str
```

- *Type:* str

---

##### `replace`<sup>Required</sup> <a name="replace" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.replace"></a>

```python
replace: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewritesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2ListenerRule.DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites">DataAwsccElasticloadbalancingv2ListenerRuleTransformsUrlRewriteConfigRewrites</a>

---



