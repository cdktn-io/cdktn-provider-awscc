# `dataAwsccNetworkmanagerSiteToSiteVpnAttachment` Submodule <a name="`dataAwsccNetworkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachment <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachment" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment awscc_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#id DataAwsccNetworkmanagerSiteToSiteVpnAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DataAwsccNetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataAwsccNetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataAwsccNetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccNetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentId">attachment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">attachment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">core_network_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">core_network_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">edge_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors">last_modification_errors</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">owner_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange">proposed_network_function_group_change</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange">proposed_segment_change</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">resource_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel">routing_policy_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">vpn_connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `attachment_id`<sup>Required</sup> <a name="attachment_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentId"></a>

```python
attachment_id: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `attachment_type`<sup>Required</sup> <a name="attachment_type" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```python
attachment_type: str
```

- *Type:* str

---

##### `core_network_arn`<sup>Required</sup> <a name="core_network_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```python
core_network_arn: str
```

- *Type:* str

---

##### `core_network_id`<sup>Required</sup> <a name="core_network_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```python
core_network_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `edge_location`<sup>Required</sup> <a name="edge_location" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```python
edge_location: str
```

- *Type:* str

---

##### `last_modification_errors`<sup>Required</sup> <a name="last_modification_errors" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.lastModificationErrors"></a>

```python
last_modification_errors: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `owner_account_id`<sup>Required</sup> <a name="owner_account_id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```python
owner_account_id: str
```

- *Type:* str

---

##### `proposed_network_function_group_change`<sup>Required</sup> <a name="proposed_network_function_group_change" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedNetworkFunctionGroupChange"></a>

```python
proposed_network_function_group_change: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference</a>

---

##### `proposed_segment_change`<sup>Required</sup> <a name="proposed_segment_change" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.proposedSegmentChange"></a>

```python
proposed_segment_change: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference</a>

---

##### `resource_arn`<sup>Required</sup> <a name="resource_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```python
resource_arn: str
```

- *Type:* str

---

##### `routing_policy_label`<sup>Required</sup> <a name="routing_policy_label" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel"></a>

```python
routing_policy_label: str
```

- *Type:* str

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList</a>

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `vpn_connection_arn`<sup>Required</sup> <a name="vpn_connection_arn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```python
vpn_connection_arn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig(
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.id">id</a></code> | <code>str</code> | Uniquely identifies the resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/data-sources/networkmanager_site_to_site_vpn_attachment#id DataAwsccNetworkmanagerSiteToSiteVpnAttachment#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange()
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags()
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange()
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags()
```


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName">network_function_group_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_function_group_name`<sup>Required</sup> <a name="network_function_group_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.networkFunctionGroupName"></a>

```python
network_function_group_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChange</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedNetworkFunctionGroupChangeTags</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber">attachment_policy_rule_number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName">segment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attachment_policy_rule_number`<sup>Required</sup> <a name="attachment_policy_rule_number" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.attachmentPolicyRuleNumber"></a>

```python
attachment_policy_rule_number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `segment_name`<sup>Required</sup> <a name="segment_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.segmentName"></a>

```python
segment_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.tags"></a>

```python
tags: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChange</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentProposedSegmentChangeTags</a>

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference <a name="DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import data_awscc_networkmanager_site_to_site_vpn_attachment

dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccNetworkmanagerSiteToSiteVpnAttachment.DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags">DataAwsccNetworkmanagerSiteToSiteVpnAttachmentTags</a>

---



