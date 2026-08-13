# `dataAwsccRtbfabricOutboundExternalLink` Submodule <a name="`dataAwsccRtbfabricOutboundExternalLink` Submodule" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRtbfabricOutboundExternalLink <a name="DataAwsccRtbfabricOutboundExternalLink" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_outbound_external_link awscc_rtbfabric_outbound_external_link}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_outbound_external_link#id DataAwsccRtbfabricOutboundExternalLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccRtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccRtbfabricOutboundExternalLink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccRtbfabricOutboundExternalLink to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccRtbfabricOutboundExternalLink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_outbound_external_link#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRtbfabricOutboundExternalLink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.createdTimestamp">created_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.gatewayId">gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkAttributes">link_attributes</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkId">link_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkLogSettings">link_log_settings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkStatus">link_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.publicEndpoint">public_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList">DataAwsccRtbfabricOutboundExternalLinkTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.updatedTimestamp">updated_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_timestamp`<sup>Required</sup> <a name="created_timestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.createdTimestamp"></a>

```python
created_timestamp: str
```

- *Type:* str

---

##### `gateway_id`<sup>Required</sup> <a name="gateway_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.gatewayId"></a>

```python
gateway_id: str
```

- *Type:* str

---

##### `link_attributes`<sup>Required</sup> <a name="link_attributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkAttributes"></a>

```python
link_attributes: DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference</a>

---

##### `link_id`<sup>Required</sup> <a name="link_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkId"></a>

```python
link_id: str
```

- *Type:* str

---

##### `link_log_settings`<sup>Required</sup> <a name="link_log_settings" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkLogSettings"></a>

```python
link_log_settings: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference</a>

---

##### `link_status`<sup>Required</sup> <a name="link_status" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.linkStatus"></a>

```python
link_status: str
```

- *Type:* str

---

##### `public_endpoint`<sup>Required</sup> <a name="public_endpoint" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.publicEndpoint"></a>

```python
public_endpoint: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.tags"></a>

```python
tags: DataAwsccRtbfabricOutboundExternalLinkTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList">DataAwsccRtbfabricOutboundExternalLinkTagsList</a>

---

##### `updated_timestamp`<sup>Required</sup> <a name="updated_timestamp" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.updatedTimestamp"></a>

```python
updated_timestamp: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLink.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRtbfabricOutboundExternalLinkConfig <a name="DataAwsccRtbfabricOutboundExternalLinkConfig" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/rtbfabric_outbound_external_link#id DataAwsccRtbfabricOutboundExternalLink#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRtbfabricOutboundExternalLinkLinkAttributes <a name="DataAwsccRtbfabricOutboundExternalLinkLinkAttributes" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributes.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributes()
```


### DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking <a name="DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking()
```


### DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings <a name="DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings()
```


### DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs <a name="DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs()
```


### DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling <a name="DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling()
```


### DataAwsccRtbfabricOutboundExternalLinkTags <a name="DataAwsccRtbfabricOutboundExternalLinkTags" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference <a name="DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId">customer_provided_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking">responder_error_masking</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributes">DataAwsccRtbfabricOutboundExternalLinkLinkAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `customer_provided_id`<sup>Required</sup> <a name="customer_provided_id" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.customerProvidedId"></a>

```python
customer_provided_id: str
```

- *Type:* str

---

##### `responder_error_masking`<sup>Required</sup> <a name="responder_error_masking" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.responderErrorMasking"></a>

```python
responder_error_masking: DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList">DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricOutboundExternalLinkLinkAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributes">DataAwsccRtbfabricOutboundExternalLinkLinkAttributes</a>

---


### DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList <a name="DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference <a name="DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode">http_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes">logging_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage">response_logging_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `http_code`<sup>Required</sup> <a name="http_code" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.httpCode"></a>

```python
http_code: str
```

- *Type:* str

---

##### `logging_types`<sup>Required</sup> <a name="logging_types" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.loggingTypes"></a>

```python
logging_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `response_logging_percentage`<sup>Required</sup> <a name="response_logging_percentage" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.responseLoggingPercentage"></a>

```python
response_logging_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMaskingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking">DataAwsccRtbfabricOutboundExternalLinkLinkAttributesResponderErrorMasking</a>

---


### DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference <a name="DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog">error_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog">filter_log</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_log`<sup>Required</sup> <a name="error_log" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.errorLog"></a>

```python
error_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `filter_log`<sup>Required</sup> <a name="filter_log" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.filterLog"></a>

```python
filter_log: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSampling</a>

---


### DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference <a name="DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling">link_application_log_sampling</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `link_application_log_sampling`<sup>Required</sup> <a name="link_application_log_sampling" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.linkApplicationLogSampling"></a>

```python
link_application_log_sampling: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsLinkApplicationLogSamplingOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogs</a>

---


### DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference <a name="DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs">application_logs</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_logs`<sup>Required</sup> <a name="application_logs" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.applicationLogs"></a>

```python
application_logs: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsApplicationLogsOutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings">DataAwsccRtbfabricOutboundExternalLinkLinkLogSettings</a>

---


### DataAwsccRtbfabricOutboundExternalLinkTagsList <a name="DataAwsccRtbfabricOutboundExternalLinkTagsList" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference <a name="DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_rtbfabric_outbound_external_link

dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTags">DataAwsccRtbfabricOutboundExternalLinkTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccRtbfabricOutboundExternalLinkTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRtbfabricOutboundExternalLink.DataAwsccRtbfabricOutboundExternalLinkTags">DataAwsccRtbfabricOutboundExternalLinkTags</a>

---



