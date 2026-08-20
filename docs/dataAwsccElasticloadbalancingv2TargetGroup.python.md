# `dataAwsccElasticloadbalancingv2TargetGroup` Submodule <a name="`dataAwsccElasticloadbalancingv2TargetGroup` Submodule" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccElasticloadbalancingv2TargetGroup <a name="DataAwsccElasticloadbalancingv2TargetGroup" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancingv2_target_group awscc_elasticloadbalancingv2_target_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancingv2_target_group#id DataAwsccElasticloadbalancingv2TargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccElasticloadbalancingv2TargetGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccElasticloadbalancingv2TargetGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccElasticloadbalancingv2TargetGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancingv2_target_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccElasticloadbalancingv2TargetGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckEnabled">health_check_enabled</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds">health_check_interval_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPath">health_check_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPort">health_check_port</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckProtocol">health_check_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds">health_check_timeout_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthyThresholdCount">healthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.loadBalancerArns">load_balancer_arns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.matcher">matcher</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference">DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocolVersion">protocol_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList">DataAwsccElasticloadbalancingv2TargetGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetControlPort">target_control_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupArn">target_group_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupAttributes">target_group_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupFullName">target_group_full_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupName">target_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targets">targets</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList">DataAwsccElasticloadbalancingv2TargetGroupTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetType">target_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount">unhealthy_threshold_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `health_check_enabled`<sup>Required</sup> <a name="health_check_enabled" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckEnabled"></a>

```python
health_check_enabled: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `health_check_interval_seconds`<sup>Required</sup> <a name="health_check_interval_seconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckIntervalSeconds"></a>

```python
health_check_interval_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `health_check_path`<sup>Required</sup> <a name="health_check_path" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPath"></a>

```python
health_check_path: str
```

- *Type:* str

---

##### `health_check_port`<sup>Required</sup> <a name="health_check_port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckPort"></a>

```python
health_check_port: str
```

- *Type:* str

---

##### `health_check_protocol`<sup>Required</sup> <a name="health_check_protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckProtocol"></a>

```python
health_check_protocol: str
```

- *Type:* str

---

##### `health_check_timeout_seconds`<sup>Required</sup> <a name="health_check_timeout_seconds" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthCheckTimeoutSeconds"></a>

```python
health_check_timeout_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `healthy_threshold_count`<sup>Required</sup> <a name="healthy_threshold_count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.healthyThresholdCount"></a>

```python
healthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `load_balancer_arns`<sup>Required</sup> <a name="load_balancer_arns" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.loadBalancerArns"></a>

```python
load_balancer_arns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `matcher`<sup>Required</sup> <a name="matcher" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.matcher"></a>

```python
matcher: DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference">DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `protocol_version`<sup>Required</sup> <a name="protocol_version" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.protocolVersion"></a>

```python
protocol_version: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tags"></a>

```python
tags: DataAwsccElasticloadbalancingv2TargetGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList">DataAwsccElasticloadbalancingv2TargetGroupTagsList</a>

---

##### `target_control_port`<sup>Required</sup> <a name="target_control_port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetControlPort"></a>

```python
target_control_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_arn`<sup>Required</sup> <a name="target_group_arn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupArn"></a>

```python
target_group_arn: str
```

- *Type:* str

---

##### `target_group_attributes`<sup>Required</sup> <a name="target_group_attributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupAttributes"></a>

```python
target_group_attributes: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList</a>

---

##### `target_group_full_name`<sup>Required</sup> <a name="target_group_full_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupFullName"></a>

```python
target_group_full_name: str
```

- *Type:* str

---

##### `target_group_name`<sup>Required</sup> <a name="target_group_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetGroupName"></a>

```python
target_group_name: str
```

- *Type:* str

---

##### `targets`<sup>Required</sup> <a name="targets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targets"></a>

```python
targets: DataAwsccElasticloadbalancingv2TargetGroupTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList">DataAwsccElasticloadbalancingv2TargetGroupTargetsList</a>

---

##### `target_type`<sup>Required</sup> <a name="target_type" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.targetType"></a>

```python
target_type: str
```

- *Type:* str

---

##### `unhealthy_threshold_count`<sup>Required</sup> <a name="unhealthy_threshold_count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.unhealthyThresholdCount"></a>

```python
unhealthy_threshold_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccElasticloadbalancingv2TargetGroupConfig <a name="DataAwsccElasticloadbalancingv2TargetGroupConfig" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/elasticloadbalancingv2_target_group#id DataAwsccElasticloadbalancingv2TargetGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccElasticloadbalancingv2TargetGroupMatcher <a name="DataAwsccElasticloadbalancingv2TargetGroupMatcher" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher()
```


### DataAwsccElasticloadbalancingv2TargetGroupTags <a name="DataAwsccElasticloadbalancingv2TargetGroupTags" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags()
```


### DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes()
```


### DataAwsccElasticloadbalancingv2TargetGroupTargets <a name="DataAwsccElasticloadbalancingv2TargetGroupTargets" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode">grpc_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode">http_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher">DataAwsccElasticloadbalancingv2TargetGroupMatcher</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `grpc_code`<sup>Required</sup> <a name="grpc_code" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.grpcCode"></a>

```python
grpc_code: str
```

- *Type:* str

---

##### `http_code`<sup>Required</sup> <a name="http_code" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcherOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2TargetGroupMatcher
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupMatcher">DataAwsccElasticloadbalancingv2TargetGroupMatcher</a>

---


### DataAwsccElasticloadbalancingv2TargetGroupTagsList <a name="DataAwsccElasticloadbalancingv2TargetGroupTagsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags">DataAwsccElasticloadbalancingv2TargetGroupTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2TargetGroupTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTags">DataAwsccElasticloadbalancingv2TargetGroupTags</a>

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes">DataAwsccElasticloadbalancingv2TargetGroupTargetGroupAttributes</a>

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetsList <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetsList" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference <a name="DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_elasticloadbalancingv2_target_group

dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId">quic_server_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets">DataAwsccElasticloadbalancingv2TargetGroupTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quic_server_id`<sup>Required</sup> <a name="quic_server_id" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.quicServerId"></a>

```python
quic_server_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccElasticloadbalancingv2TargetGroupTargets
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccElasticloadbalancingv2TargetGroup.DataAwsccElasticloadbalancingv2TargetGroupTargets">DataAwsccElasticloadbalancingv2TargetGroupTargets</a>

---



