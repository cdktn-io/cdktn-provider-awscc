# `dataAwsccNetworkfirewallFirewall` Submodule <a name="`dataAwsccNetworkfirewallFirewall` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkfirewallFirewall <a name="DataAwsccNetworkfirewallFirewall" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall awscc_networkfirewall_firewall}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall#id DataAwsccNetworkfirewallFirewall#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewall resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkfirewallFirewall resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkfirewallFirewall to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkfirewallFirewall that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkfirewallFirewall to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneChangeProtection">availability_zone_change_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneMappings">availability_zone_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.deleteProtection">delete_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.enabledAnalysisTypes">enabled_analysis_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.endpointIds">endpoint_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallArn">firewall_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallId">firewall_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallName">firewall_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyArn">firewall_policy_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyChangeProtection">firewall_policy_change_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetChangeProtection">subnet_change_protection</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetMappings">subnet_mappings</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList">DataAwsccNetworkfirewallFirewallSubnetMappingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList">DataAwsccNetworkfirewallFirewallTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayAttachmentId">transit_gateway_attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayId">transit_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `availability_zone_change_protection`<sup>Required</sup> <a name="availability_zone_change_protection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneChangeProtection"></a>

```python
availability_zone_change_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `availability_zone_mappings`<sup>Required</sup> <a name="availability_zone_mappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.availabilityZoneMappings"></a>

```python
availability_zone_mappings: DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList</a>

---

##### `delete_protection`<sup>Required</sup> <a name="delete_protection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.deleteProtection"></a>

```python
delete_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled_analysis_types`<sup>Required</sup> <a name="enabled_analysis_types" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.enabledAnalysisTypes"></a>

```python
enabled_analysis_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `endpoint_ids`<sup>Required</sup> <a name="endpoint_ids" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.endpointIds"></a>

```python
endpoint_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `firewall_arn`<sup>Required</sup> <a name="firewall_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallArn"></a>

```python
firewall_arn: str
```

- *Type:* str

---

##### `firewall_id`<sup>Required</sup> <a name="firewall_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallId"></a>

```python
firewall_id: str
```

- *Type:* str

---

##### `firewall_name`<sup>Required</sup> <a name="firewall_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallName"></a>

```python
firewall_name: str
```

- *Type:* str

---

##### `firewall_policy_arn`<sup>Required</sup> <a name="firewall_policy_arn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyArn"></a>

```python
firewall_policy_arn: str
```

- *Type:* str

---

##### `firewall_policy_change_protection`<sup>Required</sup> <a name="firewall_policy_change_protection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.firewallPolicyChangeProtection"></a>

```python
firewall_policy_change_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `subnet_change_protection`<sup>Required</sup> <a name="subnet_change_protection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetChangeProtection"></a>

```python
subnet_change_protection: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `subnet_mappings`<sup>Required</sup> <a name="subnet_mappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.subnetMappings"></a>

```python
subnet_mappings: DataAwsccNetworkfirewallFirewallSubnetMappingsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList">DataAwsccNetworkfirewallFirewallSubnetMappingsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tags"></a>

```python
tags: DataAwsccNetworkfirewallFirewallTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList">DataAwsccNetworkfirewallFirewallTagsList</a>

---

##### `transit_gateway_attachment_id`<sup>Required</sup> <a name="transit_gateway_attachment_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayAttachmentId"></a>

```python
transit_gateway_attachment_id: str
```

- *Type:* str

---

##### `transit_gateway_id`<sup>Required</sup> <a name="transit_gateway_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.transitGatewayId"></a>

```python
transit_gateway_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewall.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings <a name="DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings()
```


### DataAwsccNetworkfirewallFirewallConfig <a name="DataAwsccNetworkfirewallFirewallConfig" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/data-sources/networkfirewall_firewall#id DataAwsccNetworkfirewallFirewall#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkfirewallFirewallSubnetMappings <a name="DataAwsccNetworkfirewallFirewallSubnetMappings" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings()
```


### DataAwsccNetworkfirewallFirewallTags <a name="DataAwsccNetworkfirewallFirewallTags" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList <a name="DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference <a name="DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings">DataAwsccNetworkfirewallFirewallAvailabilityZoneMappings</a>

---


### DataAwsccNetworkfirewallFirewallSubnetMappingsList <a name="DataAwsccNetworkfirewallFirewallSubnetMappingsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference <a name="DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings">DataAwsccNetworkfirewallFirewallSubnetMappings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappingsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallFirewallSubnetMappings
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallSubnetMappings">DataAwsccNetworkfirewallFirewallSubnetMappings</a>

---


### DataAwsccNetworkfirewallFirewallTagsList <a name="DataAwsccNetworkfirewallFirewallTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkfirewallFirewallTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkfirewallFirewallTagsOutputReference <a name="DataAwsccNetworkfirewallFirewallTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkfirewall_firewall

dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags">DataAwsccNetworkfirewallFirewallTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkfirewallFirewallTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkfirewallFirewall.DataAwsccNetworkfirewallFirewallTags">DataAwsccNetworkfirewallFirewallTags</a>

---



