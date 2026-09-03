# `pcaconnectorscepConnector` Submodule <a name="`pcaconnectorscepConnector` Submodule" id="@cdktn/provider-awscc.pcaconnectorscepConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectorscepConnector <a name="PcaconnectorscepConnector" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector awscc_pcaconnectorscep_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_authority_arn: str,
  mobile_device_management: PcaconnectorscepConnectorMobileDeviceManagement = None,
  tags: typing.Mapping[str] = None,
  vpc_endpoint_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.mobileDeviceManagement">mobile_device_management</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.certificateAuthorityArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}.

---

##### `mobile_device_management`<sup>Optional</sup> <a name="mobile_device_management" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.mobileDeviceManagement"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.Initializer.parameter.vpcEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement">put_mobile_device_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetMobileDeviceManagement">reset_mobile_device_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetVpcEndpointId">reset_vpc_endpoint_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_mobile_device_management` <a name="put_mobile_device_management" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement"></a>

```python
def put_mobile_device_management(
  intune: PcaconnectorscepConnectorMobileDeviceManagementIntune = None
) -> None
```

###### `intune`<sup>Optional</sup> <a name="intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.putMobileDeviceManagement.parameter.intune"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}.

---

##### `reset_mobile_device_management` <a name="reset_mobile_device_management" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetMobileDeviceManagement"></a>

```python
def reset_mobile_device_management() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_endpoint_id` <a name="reset_vpc_endpoint_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.resetVpcEndpointId"></a>

```python
def reset_vpc_endpoint_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a PcaconnectorscepConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a PcaconnectorscepConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PcaconnectorscepConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PcaconnectorscepConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectorscepConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connectorArn">connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagement">mobile_device_management</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference">PcaconnectorscepConnectorMobileDeviceManagementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.openIdConfiguration">open_id_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference">PcaconnectorscepConnectorOpenIdConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArnInput">certificate_authority_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagementInput">mobile_device_management_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `connector_arn`<sup>Required</sup> <a name="connector_arn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.connectorArn"></a>

```python
connector_arn: str
```

- *Type:* str

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mobile_device_management`<sup>Required</sup> <a name="mobile_device_management" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagement"></a>

```python
mobile_device_management: PcaconnectorscepConnectorMobileDeviceManagementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference">PcaconnectorscepConnectorMobileDeviceManagementOutputReference</a>

---

##### `open_id_configuration`<sup>Required</sup> <a name="open_id_configuration" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.openIdConfiguration"></a>

```python
open_id_configuration: PcaconnectorscepConnectorOpenIdConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference">PcaconnectorscepConnectorOpenIdConfigurationOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `certificate_authority_arn_input`<sup>Optional</sup> <a name="certificate_authority_arn_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArnInput"></a>

```python
certificate_authority_arn_input: str
```

- *Type:* str

---

##### `mobile_device_management_input`<sup>Optional</sup> <a name="mobile_device_management_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.mobileDeviceManagementInput"></a>

```python
mobile_device_management_input: IResolvable | PcaconnectorscepConnectorMobileDeviceManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectorscepConnectorConfig <a name="PcaconnectorscepConnectorConfig" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  certificate_authority_arn: str,
  mobile_device_management: PcaconnectorscepConnectorMobileDeviceManagement = None,
  tags: typing.Mapping[str] = None,
  vpc_endpoint_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.certificateAuthorityArn">certificate_authority_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.mobileDeviceManagement">mobile_device_management</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `certificate_authority_arn`<sup>Required</sup> <a name="certificate_authority_arn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.certificateAuthorityArn"></a>

```python
certificate_authority_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#certificate_authority_arn PcaconnectorscepConnector#certificate_authority_arn}.

---

##### `mobile_device_management`<sup>Optional</sup> <a name="mobile_device_management" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.mobileDeviceManagement"></a>

```python
mobile_device_management: PcaconnectorscepConnectorMobileDeviceManagement
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#mobile_device_management PcaconnectorscepConnector#mobile_device_management}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#tags PcaconnectorscepConnector#tags}.

---

##### `vpc_endpoint_id`<sup>Optional</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorConfig.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#vpc_endpoint_id PcaconnectorscepConnector#vpc_endpoint_id}.

---

### PcaconnectorscepConnectorMobileDeviceManagement <a name="PcaconnectorscepConnectorMobileDeviceManagement" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement(
  intune: PcaconnectorscepConnectorMobileDeviceManagementIntune = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.property.intune">intune</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}. |

---

##### `intune`<sup>Optional</sup> <a name="intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement.property.intune"></a>

```python
intune: PcaconnectorscepConnectorMobileDeviceManagementIntune
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#intune PcaconnectorscepConnector#intune}.

---

### PcaconnectorscepConnectorMobileDeviceManagementIntune <a name="PcaconnectorscepConnectorMobileDeviceManagementIntune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune(
  azure_application_id: str = None,
  domain: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.azureApplicationId">azure_application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.domain">domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}. |

---

##### `azure_application_id`<sup>Optional</sup> <a name="azure_application_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.azureApplicationId"></a>

```python
azure_application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}.

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune.property.domain"></a>

```python
domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}.

---

### PcaconnectorscepConnectorOpenIdConfiguration <a name="PcaconnectorscepConnectorOpenIdConfiguration" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration()
```


## Classes <a name="Classes" id="Classes"></a>

### PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference <a name="PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetAzureApplicationId">reset_azure_application_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetDomain">reset_domain</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_azure_application_id` <a name="reset_azure_application_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetAzureApplicationId"></a>

```python
def reset_azure_application_id() -> None
```

##### `reset_domain` <a name="reset_domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.resetDomain"></a>

```python
def reset_domain() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationIdInput">azure_application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId">azure_application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `azure_application_id_input`<sup>Optional</sup> <a name="azure_application_id_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationIdInput"></a>

```python
azure_application_id_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `azure_application_id`<sup>Required</sup> <a name="azure_application_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.azureApplicationId"></a>

```python
azure_application_id: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcaconnectorscepConnectorMobileDeviceManagementIntune
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---


### PcaconnectorscepConnectorMobileDeviceManagementOutputReference <a name="PcaconnectorscepConnectorMobileDeviceManagementOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune">put_intune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resetIntune">reset_intune</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_intune` <a name="put_intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune"></a>

```python
def put_intune(
  azure_application_id: str = None,
  domain: str = None
) -> None
```

###### `azure_application_id`<sup>Optional</sup> <a name="azure_application_id" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune.parameter.azureApplicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#azure_application_id PcaconnectorscepConnector#azure_application_id}.

---

###### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.putIntune.parameter.domain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/pcaconnectorscep_connector#domain PcaconnectorscepConnector#domain}.

---

##### `reset_intune` <a name="reset_intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.resetIntune"></a>

```python
def reset_intune() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune">intune</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intuneInput">intune_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intune`<sup>Required</sup> <a name="intune" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intune"></a>

```python
intune: PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference">PcaconnectorscepConnectorMobileDeviceManagementIntuneOutputReference</a>

---

##### `intune_input`<sup>Optional</sup> <a name="intune_input" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.intuneInput"></a>

```python
intune_input: IResolvable | PcaconnectorscepConnectorMobileDeviceManagementIntune
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementIntune">PcaconnectorscepConnectorMobileDeviceManagementIntune</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagementOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | PcaconnectorscepConnectorMobileDeviceManagement
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorMobileDeviceManagement">PcaconnectorscepConnectorMobileDeviceManagement</a>

---


### PcaconnectorscepConnectorOpenIdConfigurationOutputReference <a name="PcaconnectorscepConnectorOpenIdConfigurationOutputReference" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import pcaconnectorscep_connector

pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience">audience</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration">PcaconnectorscepConnectorOpenIdConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.audience"></a>

```python
audience: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: PcaconnectorscepConnectorOpenIdConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectorscepConnector.PcaconnectorscepConnectorOpenIdConfiguration">PcaconnectorscepConnectorOpenIdConfiguration</a>

---



