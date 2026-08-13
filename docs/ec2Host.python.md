# `ec2Host` Submodule <a name="`ec2Host` Submodule" id="@cdktn/provider-awscc.ec2Host"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Host <a name="Ec2Host" id="@cdktn/provider-awscc.ec2Host.Ec2Host"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host awscc_ec2_host}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2Host(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone: str,
  asset_id: str = None,
  auto_placement: str = None,
  host_maintenance: str = None,
  host_recovery: str = None,
  instance_family: str = None,
  instance_type: str = None,
  outpost_arn: str = None,
  tags: IResolvable | typing.List[Ec2HostTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to allocate the Dedicated Host. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.assetId">asset_id</a></code> | <code>str</code> | The ID of the Outpost hardware asset. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.autoPlacement">auto_placement</a></code> | <code>str</code> | Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.hostMaintenance">host_maintenance</a></code> | <code>str</code> | Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.hostRecovery">host_recovery</a></code> | <code>str</code> | Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.instanceFamily">instance_family</a></code> | <code>str</code> | Specifies the instance family to be supported by the Dedicated Hosts. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.instanceType">instance_type</a></code> | <code>str</code> | Specifies the instance type to be supported by the Dedicated Hosts. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.outpostArn">outpost_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]</code> | Any tags assigned to the Host. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone in which to allocate the Dedicated Host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.assetId"></a>

- *Type:* str

The ID of the Outpost hardware asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}

---

##### `auto_placement`<sup>Optional</sup> <a name="auto_placement" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.autoPlacement"></a>

- *Type:* str

Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}

---

##### `host_maintenance`<sup>Optional</sup> <a name="host_maintenance" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.hostMaintenance"></a>

- *Type:* str

Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#host_maintenance Ec2Host#host_maintenance}

---

##### `host_recovery`<sup>Optional</sup> <a name="host_recovery" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.hostRecovery"></a>

- *Type:* str

Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}

---

##### `instance_family`<sup>Optional</sup> <a name="instance_family" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.instanceFamily"></a>

- *Type:* str

Specifies the instance family to be supported by the Dedicated Hosts.

If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.instanceType"></a>

- *Type:* str

Specifies the instance type to be supported by the Dedicated Hosts.

If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.outpostArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Host.Ec2Host.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]

Any tags assigned to the Host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#tags Ec2Host#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetAssetId">reset_asset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetAutoPlacement">reset_auto_placement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetHostMaintenance">reset_host_maintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetHostRecovery">reset_host_recovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetInstanceFamily">reset_instance_family</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetInstanceType">reset_instance_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetOutpostArn">reset_outpost_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Host.Ec2Host.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2Host.Ec2Host.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Host.Ec2Host.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2Host.Ec2Host.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Host.Ec2Host.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Host.Ec2Host.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2Host.Ec2Host.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2Host.Ec2Host.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2Host.Ec2Host.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2Host.Ec2Host.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Host.Ec2Host.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2Host.Ec2Host.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2Host.Ec2Host.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Host.Ec2Host.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2Host.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2Host.Ec2Host.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2HostTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Host.Ec2Host.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]

---

##### `reset_asset_id` <a name="reset_asset_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetAssetId"></a>

```python
def reset_asset_id() -> None
```

##### `reset_auto_placement` <a name="reset_auto_placement" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetAutoPlacement"></a>

```python
def reset_auto_placement() -> None
```

##### `reset_host_maintenance` <a name="reset_host_maintenance" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetHostMaintenance"></a>

```python
def reset_host_maintenance() -> None
```

##### `reset_host_recovery` <a name="reset_host_recovery" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetHostRecovery"></a>

```python
def reset_host_recovery() -> None
```

##### `reset_instance_family` <a name="reset_instance_family" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetInstanceFamily"></a>

```python
def reset_instance_family() -> None
```

##### `reset_instance_type` <a name="reset_instance_type" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetInstanceType"></a>

```python
def reset_instance_type() -> None
```

##### `reset_outpost_arn` <a name="reset_outpost_arn" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetOutpostArn"></a>

```python
def reset_outpost_arn() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2Host.Ec2Host.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2Host resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2Host.Ec2Host.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2Host.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Host.Ec2Host.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2Host.Ec2Host.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2Host.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Host.Ec2Host.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2Host.Ec2Host.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2Host.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Host.Ec2Host.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2Host.Ec2Host.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2Host.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2Host resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Host.Ec2Host.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2Host to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2Host that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Host.Ec2Host.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Host to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostId">host_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList">Ec2HostTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.assetIdInput">asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.autoPlacementInput">auto_placement_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostMaintenanceInput">host_maintenance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostRecoveryInput">host_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceFamilyInput">instance_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceTypeInput">instance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.outpostArnInput">outpost_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.assetId">asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.autoPlacement">auto_placement</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostMaintenance">host_maintenance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostRecovery">host_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceFamily">instance_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceType">instance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.outpostArn">outpost_arn</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `host_id`<sup>Required</sup> <a name="host_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostId"></a>

```python
host_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.tags"></a>

```python
tags: Ec2HostTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList">Ec2HostTagsList</a>

---

##### `asset_id_input`<sup>Optional</sup> <a name="asset_id_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.assetIdInput"></a>

```python
asset_id_input: str
```

- *Type:* str

---

##### `auto_placement_input`<sup>Optional</sup> <a name="auto_placement_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.autoPlacementInput"></a>

```python
auto_placement_input: str
```

- *Type:* str

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `host_maintenance_input`<sup>Optional</sup> <a name="host_maintenance_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostMaintenanceInput"></a>

```python
host_maintenance_input: str
```

- *Type:* str

---

##### `host_recovery_input`<sup>Optional</sup> <a name="host_recovery_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostRecoveryInput"></a>

```python
host_recovery_input: str
```

- *Type:* str

---

##### `instance_family_input`<sup>Optional</sup> <a name="instance_family_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceFamilyInput"></a>

```python
instance_family_input: str
```

- *Type:* str

---

##### `instance_type_input`<sup>Optional</sup> <a name="instance_type_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceTypeInput"></a>

```python
instance_type_input: str
```

- *Type:* str

---

##### `outpost_arn_input`<sup>Optional</sup> <a name="outpost_arn_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.outpostArnInput"></a>

```python
outpost_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2HostTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]

---

##### `asset_id`<sup>Required</sup> <a name="asset_id" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

---

##### `auto_placement`<sup>Required</sup> <a name="auto_placement" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.autoPlacement"></a>

```python
auto_placement: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `host_maintenance`<sup>Required</sup> <a name="host_maintenance" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostMaintenance"></a>

```python
host_maintenance: str
```

- *Type:* str

---

##### `host_recovery`<sup>Required</sup> <a name="host_recovery" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.hostRecovery"></a>

```python
host_recovery: str
```

- *Type:* str

---

##### `instance_family`<sup>Required</sup> <a name="instance_family" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

---

##### `instance_type`<sup>Required</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

---

##### `outpost_arn`<sup>Required</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2Host.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2Host.Ec2Host.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2HostConfig <a name="Ec2HostConfig" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2HostConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_zone: str,
  asset_id: str = None,
  auto_placement: str = None,
  host_maintenance: str = None,
  host_recovery: str = None,
  instance_family: str = None,
  instance_type: str = None,
  outpost_arn: str = None,
  tags: IResolvable | typing.List[Ec2HostTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to allocate the Dedicated Host. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.assetId">asset_id</a></code> | <code>str</code> | The ID of the Outpost hardware asset. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.autoPlacement">auto_placement</a></code> | <code>str</code> | Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.hostMaintenance">host_maintenance</a></code> | <code>str</code> | Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.hostRecovery">host_recovery</a></code> | <code>str</code> | Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.instanceFamily">instance_family</a></code> | <code>str</code> | Specifies the instance family to be supported by the Dedicated Hosts. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.instanceType">instance_type</a></code> | <code>str</code> | Specifies the instance type to be supported by the Dedicated Hosts. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.outpostArn">outpost_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]</code> | Any tags assigned to the Host. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone in which to allocate the Dedicated Host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#availability_zone Ec2Host#availability_zone}

---

##### `asset_id`<sup>Optional</sup> <a name="asset_id" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.assetId"></a>

```python
asset_id: str
```

- *Type:* str

The ID of the Outpost hardware asset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#asset_id Ec2Host#asset_id}

---

##### `auto_placement`<sup>Optional</sup> <a name="auto_placement" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.autoPlacement"></a>

```python
auto_placement: str
```

- *Type:* str

Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#auto_placement Ec2Host#auto_placement}

---

##### `host_maintenance`<sup>Optional</sup> <a name="host_maintenance" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.hostMaintenance"></a>

```python
host_maintenance: str
```

- *Type:* str

Automatically allocates a new dedicated host and moves your instances on to it if a degradation is detected on your current host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#host_maintenance Ec2Host#host_maintenance}

---

##### `host_recovery`<sup>Optional</sup> <a name="host_recovery" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.hostRecovery"></a>

```python
host_recovery: str
```

- *Type:* str

Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#host_recovery Ec2Host#host_recovery}

---

##### `instance_family`<sup>Optional</sup> <a name="instance_family" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.instanceFamily"></a>

```python
instance_family: str
```

- *Type:* str

Specifies the instance family to be supported by the Dedicated Hosts.

If you specify an instance family, the Dedicated Hosts support multiple instance types within that instance family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#instance_family Ec2Host#instance_family}

---

##### `instance_type`<sup>Optional</sup> <a name="instance_type" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.instanceType"></a>

```python
instance_type: str
```

- *Type:* str

Specifies the instance type to be supported by the Dedicated Hosts.

If you specify an instance type, the Dedicated Hosts support instances of the specified instance type only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#instance_type Ec2Host#instance_type}

---

##### `outpost_arn`<sup>Optional</sup> <a name="outpost_arn" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.outpostArn"></a>

```python
outpost_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the Amazon Web Services Outpost on which to allocate the Dedicated Host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#outpost_arn Ec2Host#outpost_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2Host.Ec2HostConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2HostTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]

Any tags assigned to the Host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#tags Ec2Host#tags}

---

### Ec2HostTags <a name="Ec2HostTags" id="@cdktn/provider-awscc.ec2Host.Ec2HostTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Host.Ec2HostTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2HostTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#key Ec2Host#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#value Ec2Host#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2Host.Ec2HostTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#key Ec2Host#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2Host.Ec2HostTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_host#value Ec2Host#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2HostTagsList <a name="Ec2HostTagsList" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2HostTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2HostTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2HostTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>]

---


### Ec2HostTagsOutputReference <a name="Ec2HostTagsOutputReference" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_host

ec2Host.Ec2HostTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2Host.Ec2HostTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2HostTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2Host.Ec2HostTags">Ec2HostTags</a>

---



