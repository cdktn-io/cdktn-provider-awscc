# `lightsailInstance` Submodule <a name="`lightsailInstance` Submodule" id="@cdktn/provider-awscc.lightsailInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailInstance <a name="LightsailInstance" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance awscc_lightsail_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstance(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  blueprint_id: str,
  bundle_id: str,
  instance_name: str,
  add_ons: IResolvable | typing.List[LightsailInstanceAddOns] = None,
  availability_zone: str = None,
  hardware: LightsailInstanceHardware = None,
  key_pair_name: str = None,
  location: LightsailInstanceLocation = None,
  networking: LightsailInstanceNetworking = None,
  state: LightsailInstanceState = None,
  tags: IResolvable | typing.List[LightsailInstanceTags] = None,
  user_data: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.blueprintId">blueprint_id</a></code> | <code>str</code> | The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.bundleId">bundle_id</a></code> | <code>str</code> | The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | The names to use for your new Lightsail instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.addOns">add_ons</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]</code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | Hardware of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.keyPairName">key_pair_name</a></code> | <code>str</code> | The name of your key pair. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | Networking of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | Current State of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.userData">user_data</a></code> | <code>str</code> | A launch script you can create that configures a server with additional user data. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blueprint_id`<sup>Required</sup> <a name="blueprint_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.blueprintId"></a>

- *Type:* str

The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#blueprint_id LightsailInstance#blueprint_id}

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.bundleId"></a>

- *Type:* str

The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#bundle_id LightsailInstance#bundle_id}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.instanceName"></a>

- *Type:* str

The names to use for your new Lightsail instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#instance_name LightsailInstance#instance_name}

---

##### `add_ons`<sup>Optional</sup> <a name="add_ons" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.addOns"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#add_ons LightsailInstance#add_ons}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* str

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#availability_zone LightsailInstance#availability_zone}

---

##### `hardware`<sup>Optional</sup> <a name="hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.hardware"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

Hardware of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#hardware LightsailInstance#hardware}

---

##### `key_pair_name`<sup>Optional</sup> <a name="key_pair_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.keyPairName"></a>

- *Type:* str

The name of your key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#key_pair_name LightsailInstance#key_pair_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#location LightsailInstance#location}

---

##### `networking`<sup>Optional</sup> <a name="networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.networking"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

Networking of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#networking LightsailInstance#networking}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.state"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

Current State of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#state LightsailInstance#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#tags LightsailInstance#tags}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.Initializer.parameter.userData"></a>

- *Type:* str

A launch script you can create that configures a server with additional user data.

For example, you might want to run apt-get -y update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#user_data LightsailInstance#user_data}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns">put_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware">put_hardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation">put_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking">put_networking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState">put_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAddOns">reset_add_ons</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAvailabilityZone">reset_availability_zone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetHardware">reset_hardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetKeyPairName">reset_key_pair_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetNetworking">reset_networking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetUserData">reset_user_data</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_add_ons` <a name="put_add_ons" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns"></a>

```python
def put_add_ons(
  value: IResolvable | typing.List[LightsailInstanceAddOns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putAddOns.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]

---

##### `put_hardware` <a name="put_hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware"></a>

```python
def put_hardware(
  disks: IResolvable | typing.List[LightsailInstanceHardwareDisks] = None
) -> None
```

###### `disks`<sup>Optional</sup> <a name="disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putHardware.parameter.disks"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]

Disks attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#disks LightsailInstance#disks}

---

##### `put_location` <a name="put_location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putLocation"></a>

```python
def put_location() -> None
```

##### `put_networking` <a name="put_networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking"></a>

```python
def put_networking(
  monthly_transfer: LightsailInstanceNetworkingMonthlyTransfer = None,
  ports: IResolvable | typing.List[LightsailInstanceNetworkingPorts] = None
) -> None
```

###### `monthly_transfer`<sup>Optional</sup> <a name="monthly_transfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking.parameter.monthlyTransfer"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

Monthly Transfer of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#monthly_transfer LightsailInstance#monthly_transfer}

---

###### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putNetworking.parameter.ports"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]

Ports to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#ports LightsailInstance#ports}

---

##### `put_state` <a name="put_state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putState"></a>

```python
def put_state() -> None
```

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[LightsailInstanceTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]

---

##### `reset_add_ons` <a name="reset_add_ons" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAddOns"></a>

```python
def reset_add_ons() -> None
```

##### `reset_availability_zone` <a name="reset_availability_zone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetAvailabilityZone"></a>

```python
def reset_availability_zone() -> None
```

##### `reset_hardware` <a name="reset_hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetHardware"></a>

```python
def reset_hardware() -> None
```

##### `reset_key_pair_name` <a name="reset_key_pair_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetKeyPairName"></a>

```python
def reset_key_pair_name() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_networking` <a name="reset_networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetNetworking"></a>

```python
def reset_networking() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_user_data` <a name="reset_user_data" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.resetUserData"></a>

```python
def reset_user_data() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a LightsailInstance resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a LightsailInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LightsailInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LightsailInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOns">add_ons</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList">LightsailInstanceAddOnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference">LightsailInstanceHardwareOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceArn">instance_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.ipv6Addresses">ipv6_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.isStaticIp">is_static_ip</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference">LightsailInstanceLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference">LightsailInstanceNetworkingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.privateIpAddress">private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.publicIpAddress">public_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.sshKeyName">ssh_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference">LightsailInstanceStateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.supportCode">support_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList">LightsailInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOnsInput">add_ons_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZoneInput">availability_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintIdInput">blueprint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleIdInput">bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardwareInput">hardware_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairNameInput">key_pair_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.locationInput">location_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networkingInput">networking_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.stateInput">state_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userDataInput">user_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintId">blueprint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleId">bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairName">key_pair_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userData">user_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `add_ons`<sup>Required</sup> <a name="add_ons" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOns"></a>

```python
add_ons: LightsailInstanceAddOnsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList">LightsailInstanceAddOnsList</a>

---

##### `hardware`<sup>Required</sup> <a name="hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardware"></a>

```python
hardware: LightsailInstanceHardwareOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference">LightsailInstanceHardwareOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_arn`<sup>Required</sup> <a name="instance_arn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceArn"></a>

```python
instance_arn: str
```

- *Type:* str

---

##### `ipv6_addresses`<sup>Required</sup> <a name="ipv6_addresses" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.ipv6Addresses"></a>

```python
ipv6_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_static_ip`<sup>Required</sup> <a name="is_static_ip" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.isStaticIp"></a>

```python
is_static_ip: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.location"></a>

```python
location: LightsailInstanceLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference">LightsailInstanceLocationOutputReference</a>

---

##### `networking`<sup>Required</sup> <a name="networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networking"></a>

```python
networking: LightsailInstanceNetworkingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference">LightsailInstanceNetworkingOutputReference</a>

---

##### `private_ip_address`<sup>Required</sup> <a name="private_ip_address" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.privateIpAddress"></a>

```python
private_ip_address: str
```

- *Type:* str

---

##### `public_ip_address`<sup>Required</sup> <a name="public_ip_address" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.publicIpAddress"></a>

```python
public_ip_address: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `ssh_key_name`<sup>Required</sup> <a name="ssh_key_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.sshKeyName"></a>

```python
ssh_key_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.state"></a>

```python
state: LightsailInstanceStateOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference">LightsailInstanceStateOutputReference</a>

---

##### `support_code`<sup>Required</sup> <a name="support_code" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.supportCode"></a>

```python
support_code: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tags"></a>

```python
tags: LightsailInstanceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList">LightsailInstanceTagsList</a>

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `add_ons_input`<sup>Optional</sup> <a name="add_ons_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.addOnsInput"></a>

```python
add_ons_input: IResolvable | typing.List[LightsailInstanceAddOns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]

---

##### `availability_zone_input`<sup>Optional</sup> <a name="availability_zone_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZoneInput"></a>

```python
availability_zone_input: str
```

- *Type:* str

---

##### `blueprint_id_input`<sup>Optional</sup> <a name="blueprint_id_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintIdInput"></a>

```python
blueprint_id_input: str
```

- *Type:* str

---

##### `bundle_id_input`<sup>Optional</sup> <a name="bundle_id_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleIdInput"></a>

```python
bundle_id_input: str
```

- *Type:* str

---

##### `hardware_input`<sup>Optional</sup> <a name="hardware_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.hardwareInput"></a>

```python
hardware_input: IResolvable | LightsailInstanceHardware
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `key_pair_name_input`<sup>Optional</sup> <a name="key_pair_name_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairNameInput"></a>

```python
key_pair_name_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.locationInput"></a>

```python
location_input: IResolvable | LightsailInstanceLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

---

##### `networking_input`<sup>Optional</sup> <a name="networking_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.networkingInput"></a>

```python
networking_input: IResolvable | LightsailInstanceNetworking
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.stateInput"></a>

```python
state_input: IResolvable | LightsailInstanceState
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[LightsailInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]

---

##### `user_data_input`<sup>Optional</sup> <a name="user_data_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userDataInput"></a>

```python
user_data_input: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `blueprint_id`<sup>Required</sup> <a name="blueprint_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.blueprintId"></a>

```python
blueprint_id: str
```

- *Type:* str

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `key_pair_name`<sup>Required</sup> <a name="key_pair_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.keyPairName"></a>

```python
key_pair_name: str
```

- *Type:* str

---

##### `user_data`<sup>Required</sup> <a name="user_data" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.userData"></a>

```python
user_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailInstanceAddOns <a name="LightsailInstanceAddOns" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceAddOns(
  add_on_type: str = None,
  auto_snapshot_add_on_request: LightsailInstanceAddOnsAutoSnapshotAddOnRequest = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.addOnType">add_on_type</a></code> | <code>str</code> | The add-on type. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.autoSnapshotAddOnRequest">auto_snapshot_add_on_request</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | An object that represents additional parameters when enabling or modifying the automatic snapshot add-on. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.status">status</a></code> | <code>str</code> | Status of the Addon. |

---

##### `add_on_type`<sup>Optional</sup> <a name="add_on_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.addOnType"></a>

```python
add_on_type: str
```

- *Type:* str

The add-on type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#add_on_type LightsailInstance#add_on_type}

---

##### `auto_snapshot_add_on_request`<sup>Optional</sup> <a name="auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.autoSnapshotAddOnRequest"></a>

```python
auto_snapshot_add_on_request: LightsailInstanceAddOnsAutoSnapshotAddOnRequest
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

An object that represents additional parameters when enabling or modifying the automatic snapshot add-on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#auto_snapshot_add_on_request LightsailInstance#auto_snapshot_add_on_request}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns.property.status"></a>

```python
status: str
```

- *Type:* str

Status of the Addon.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#status LightsailInstance#status}

---

### LightsailInstanceAddOnsAutoSnapshotAddOnRequest <a name="LightsailInstanceAddOnsAutoSnapshotAddOnRequest" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest(
  snapshot_time_of_day: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay">snapshot_time_of_day</a></code> | <code>str</code> | The daily time when an automatic snapshot will be created. |

---

##### `snapshot_time_of_day`<sup>Optional</sup> <a name="snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest.property.snapshotTimeOfDay"></a>

```python
snapshot_time_of_day: str
```

- *Type:* str

The daily time when an automatic snapshot will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#snapshot_time_of_day LightsailInstance#snapshot_time_of_day}

---

### LightsailInstanceConfig <a name="LightsailInstanceConfig" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  blueprint_id: str,
  bundle_id: str,
  instance_name: str,
  add_ons: IResolvable | typing.List[LightsailInstanceAddOns] = None,
  availability_zone: str = None,
  hardware: LightsailInstanceHardware = None,
  key_pair_name: str = None,
  location: LightsailInstanceLocation = None,
  networking: LightsailInstanceNetworking = None,
  state: LightsailInstanceState = None,
  tags: IResolvable | typing.List[LightsailInstanceTags] = None,
  user_data: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.blueprintId">blueprint_id</a></code> | <code>str</code> | The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.bundleId">bundle_id</a></code> | <code>str</code> | The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.instanceName">instance_name</a></code> | <code>str</code> | The names to use for your new Lightsail instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.addOns">add_ons</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]</code> | An array of objects representing the add-ons to enable for the new instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.availabilityZone">availability_zone</a></code> | <code>str</code> | The Availability Zone in which to create your instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.hardware">hardware</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | Hardware of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.keyPairName">key_pair_name</a></code> | <code>str</code> | The name of your key pair. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.location">location</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | Location of a resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.networking">networking</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | Networking of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.state">state</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | Current State of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.userData">user_data</a></code> | <code>str</code> | A launch script you can create that configures a server with additional user data. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `blueprint_id`<sup>Required</sup> <a name="blueprint_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.blueprintId"></a>

```python
blueprint_id: str
```

- *Type:* str

The ID for a virtual private server image (e.g., app_wordpress_4_4 or app_lamp_7_0 ). Use the get blueprints operation to return a list of available images (or blueprints ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#blueprint_id LightsailInstance#blueprint_id}

---

##### `bundle_id`<sup>Required</sup> <a name="bundle_id" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.bundleId"></a>

```python
bundle_id: str
```

- *Type:* str

The bundle of specification information for your virtual private server (or instance ), including the pricing plan (e.g., micro_1_0 ).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#bundle_id LightsailInstance#bundle_id}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The names to use for your new Lightsail instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#instance_name LightsailInstance#instance_name}

---

##### `add_ons`<sup>Optional</sup> <a name="add_ons" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.addOns"></a>

```python
add_ons: IResolvable | typing.List[LightsailInstanceAddOns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]

An array of objects representing the add-ons to enable for the new instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#add_ons LightsailInstance#add_ons}

---

##### `availability_zone`<sup>Optional</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

The Availability Zone in which to create your instance.

Use the following format: us-east-2a (case sensitive). Be sure to add the include Availability Zones parameter to your request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#availability_zone LightsailInstance#availability_zone}

---

##### `hardware`<sup>Optional</sup> <a name="hardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.hardware"></a>

```python
hardware: LightsailInstanceHardware
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

Hardware of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#hardware LightsailInstance#hardware}

---

##### `key_pair_name`<sup>Optional</sup> <a name="key_pair_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.keyPairName"></a>

```python
key_pair_name: str
```

- *Type:* str

The name of your key pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#key_pair_name LightsailInstance#key_pair_name}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.location"></a>

```python
location: LightsailInstanceLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

Location of a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#location LightsailInstance#location}

---

##### `networking`<sup>Optional</sup> <a name="networking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.networking"></a>

```python
networking: LightsailInstanceNetworking
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

Networking of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#networking LightsailInstance#networking}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.state"></a>

```python
state: LightsailInstanceState
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

Current State of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#state LightsailInstance#state}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[LightsailInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#tags LightsailInstance#tags}

---

##### `user_data`<sup>Optional</sup> <a name="user_data" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceConfig.property.userData"></a>

```python
user_data: str
```

- *Type:* str

A launch script you can create that configures a server with additional user data.

For example, you might want to run apt-get -y update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#user_data LightsailInstance#user_data}

---

### LightsailInstanceHardware <a name="LightsailInstanceHardware" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceHardware(
  disks: IResolvable | typing.List[LightsailInstanceHardwareDisks] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.property.disks">disks</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]</code> | Disks attached to the Instance. |

---

##### `disks`<sup>Optional</sup> <a name="disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware.property.disks"></a>

```python
disks: IResolvable | typing.List[LightsailInstanceHardwareDisks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]

Disks attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#disks LightsailInstance#disks}

---

### LightsailInstanceHardwareDisks <a name="LightsailInstanceHardwareDisks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceHardwareDisks(
  attached_to: str = None,
  attachment_state: str = None,
  disk_name: str = None,
  iops: typing.Union[int, float] = None,
  is_system_disk: bool | IResolvable = None,
  path: str = None,
  size_in_gb: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachedTo">attached_to</a></code> | <code>str</code> | Instance attached to the disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachmentState">attachment_state</a></code> | <code>str</code> | Attachment state of the disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.diskName">disk_name</a></code> | <code>str</code> | The names to use for your new Lightsail disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | IOPS of disk. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.isSystemDisk">is_system_disk</a></code> | <code>bool \| cdktn.IResolvable</code> | Is the Attached disk is the system disk of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.path">path</a></code> | <code>str</code> | Path of the disk attached to the instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.sizeInGb">size_in_gb</a></code> | <code>str</code> | Size of the disk attached to the Instance. |

---

##### `attached_to`<sup>Optional</sup> <a name="attached_to" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachedTo"></a>

```python
attached_to: str
```

- *Type:* str

Instance attached to the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#attached_to LightsailInstance#attached_to}

---

##### `attachment_state`<sup>Optional</sup> <a name="attachment_state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.attachmentState"></a>

```python
attachment_state: str
```

- *Type:* str

Attachment state of the disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#attachment_state LightsailInstance#attachment_state}

---

##### `disk_name`<sup>Optional</sup> <a name="disk_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

The names to use for your new Lightsail disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#disk_name LightsailInstance#disk_name}

---

##### `iops`<sup>Optional</sup> <a name="iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

IOPS of disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#iops LightsailInstance#iops}

---

##### `is_system_disk`<sup>Optional</sup> <a name="is_system_disk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.isSystemDisk"></a>

```python
is_system_disk: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Is the Attached disk is the system disk of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#is_system_disk LightsailInstance#is_system_disk}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.path"></a>

```python
path: str
```

- *Type:* str

Path of the disk attached to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#path LightsailInstance#path}

---

##### `size_in_gb`<sup>Optional</sup> <a name="size_in_gb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks.property.sizeInGb"></a>

```python
size_in_gb: str
```

- *Type:* str

Size of the disk attached to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#size_in_gb LightsailInstance#size_in_gb}

---

### LightsailInstanceLocation <a name="LightsailInstanceLocation" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceLocation()
```


### LightsailInstanceNetworking <a name="LightsailInstanceNetworking" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworking(
  monthly_transfer: LightsailInstanceNetworkingMonthlyTransfer = None,
  ports: IResolvable | typing.List[LightsailInstanceNetworkingPorts] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.monthlyTransfer">monthly_transfer</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | Monthly Transfer of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.ports">ports</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]</code> | Ports to the Instance. |

---

##### `monthly_transfer`<sup>Optional</sup> <a name="monthly_transfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.monthlyTransfer"></a>

```python
monthly_transfer: LightsailInstanceNetworkingMonthlyTransfer
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

Monthly Transfer of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#monthly_transfer LightsailInstance#monthly_transfer}

---

##### `ports`<sup>Optional</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking.property.ports"></a>

```python
ports: IResolvable | typing.List[LightsailInstanceNetworkingPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]

Ports to the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#ports LightsailInstance#ports}

---

### LightsailInstanceNetworkingMonthlyTransfer <a name="LightsailInstanceNetworkingMonthlyTransfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer()
```


### LightsailInstanceNetworkingPorts <a name="LightsailInstanceNetworkingPorts" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworkingPorts(
  access_direction: str = None,
  access_from: str = None,
  access_type: str = None,
  cidr_list_aliases: typing.List[str] = None,
  cidrs: typing.List[str] = None,
  common_name: str = None,
  from_port: typing.Union[int, float] = None,
  ipv6_cidrs: typing.List[str] = None,
  protocol: str = None,
  to_port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessDirection">access_direction</a></code> | <code>str</code> | Access Direction for Protocol of the Instance(inbound/outbound). |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessFrom">access_from</a></code> | <code>str</code> | Access From Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessType">access_type</a></code> | <code>str</code> | Access Type Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrListAliases">cidr_list_aliases</a></code> | <code>typing.List[str]</code> | cidr List Aliases. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | cidrs. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.commonName">common_name</a></code> | <code>str</code> | CommonName for Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | From Port of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.ipv6Cidrs">ipv6_cidrs</a></code> | <code>typing.List[str]</code> | IPv6 Cidrs. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.protocol">protocol</a></code> | <code>str</code> | Port Protocol of the Instance. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | To Port of the Instance. |

---

##### `access_direction`<sup>Optional</sup> <a name="access_direction" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessDirection"></a>

```python
access_direction: str
```

- *Type:* str

Access Direction for Protocol of the Instance(inbound/outbound).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#access_direction LightsailInstance#access_direction}

---

##### `access_from`<sup>Optional</sup> <a name="access_from" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessFrom"></a>

```python
access_from: str
```

- *Type:* str

Access From Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#access_from LightsailInstance#access_from}

---

##### `access_type`<sup>Optional</sup> <a name="access_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Access Type Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#access_type LightsailInstance#access_type}

---

##### `cidr_list_aliases`<sup>Optional</sup> <a name="cidr_list_aliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrListAliases"></a>

```python
cidr_list_aliases: typing.List[str]
```

- *Type:* typing.List[str]

cidr List Aliases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#cidr_list_aliases LightsailInstance#cidr_list_aliases}

---

##### `cidrs`<sup>Optional</sup> <a name="cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#cidrs LightsailInstance#cidrs}

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

CommonName for Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#common_name LightsailInstance#common_name}

---

##### `from_port`<sup>Optional</sup> <a name="from_port" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

From Port of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#from_port LightsailInstance#from_port}

---

##### `ipv6_cidrs`<sup>Optional</sup> <a name="ipv6_cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.ipv6Cidrs"></a>

```python
ipv6_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

IPv6 Cidrs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#ipv_6_cidrs LightsailInstance#ipv_6_cidrs}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Port Protocol of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#protocol LightsailInstance#protocol}

---

##### `to_port`<sup>Optional</sup> <a name="to_port" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

To Port of the Instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#to_port LightsailInstance#to_port}

---

### LightsailInstanceState <a name="LightsailInstanceState" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceState()
```


### LightsailInstanceTags <a name="LightsailInstanceTags" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#key LightsailInstance#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#value LightsailInstance#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference <a name="LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay">reset_snapshot_time_of_day</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_snapshot_time_of_day` <a name="reset_snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.resetSnapshotTimeOfDay"></a>

```python
def reset_snapshot_time_of_day() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput">snapshot_time_of_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay">snapshot_time_of_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `snapshot_time_of_day_input`<sup>Optional</sup> <a name="snapshot_time_of_day_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDayInput"></a>

```python
snapshot_time_of_day_input: str
```

- *Type:* str

---

##### `snapshot_time_of_day`<sup>Required</sup> <a name="snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.snapshotTimeOfDay"></a>

```python
snapshot_time_of_day: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceAddOnsAutoSnapshotAddOnRequest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---


### LightsailInstanceAddOnsList <a name="LightsailInstanceAddOnsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceAddOnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailInstanceAddOnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailInstanceAddOns]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>]

---


### LightsailInstanceAddOnsOutputReference <a name="LightsailInstanceAddOnsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceAddOnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest">put_auto_snapshot_add_on_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAddOnType">reset_add_on_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAutoSnapshotAddOnRequest">reset_auto_snapshot_add_on_request</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetStatus">reset_status</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_auto_snapshot_add_on_request` <a name="put_auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest"></a>

```python
def put_auto_snapshot_add_on_request(
  snapshot_time_of_day: str = None
) -> None
```

###### `snapshot_time_of_day`<sup>Optional</sup> <a name="snapshot_time_of_day" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.putAutoSnapshotAddOnRequest.parameter.snapshotTimeOfDay"></a>

- *Type:* str

The daily time when an automatic snapshot will be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lightsail_instance#snapshot_time_of_day LightsailInstance#snapshot_time_of_day}

---

##### `reset_add_on_type` <a name="reset_add_on_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAddOnType"></a>

```python
def reset_add_on_type() -> None
```

##### `reset_auto_snapshot_add_on_request` <a name="reset_auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetAutoSnapshotAddOnRequest"></a>

```python
def reset_auto_snapshot_add_on_request() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.resetStatus"></a>

```python
def reset_status() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest">auto_snapshot_add_on_request</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnTypeInput">add_on_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequestInput">auto_snapshot_add_on_request_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnType">add_on_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_snapshot_add_on_request`<sup>Required</sup> <a name="auto_snapshot_add_on_request" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequest"></a>

```python
auto_snapshot_add_on_request: LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference">LightsailInstanceAddOnsAutoSnapshotAddOnRequestOutputReference</a>

---

##### `add_on_type_input`<sup>Optional</sup> <a name="add_on_type_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnTypeInput"></a>

```python
add_on_type_input: str
```

- *Type:* str

---

##### `auto_snapshot_add_on_request_input`<sup>Optional</sup> <a name="auto_snapshot_add_on_request_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.autoSnapshotAddOnRequestInput"></a>

```python
auto_snapshot_add_on_request_input: IResolvable | LightsailInstanceAddOnsAutoSnapshotAddOnRequest
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsAutoSnapshotAddOnRequest">LightsailInstanceAddOnsAutoSnapshotAddOnRequest</a>

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `add_on_type`<sup>Required</sup> <a name="add_on_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.addOnType"></a>

```python
add_on_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOnsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceAddOns
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceAddOns">LightsailInstanceAddOns</a>

---


### LightsailInstanceHardwareDisksList <a name="LightsailInstanceHardwareDisksList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceHardwareDisksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailInstanceHardwareDisksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailInstanceHardwareDisks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]

---


### LightsailInstanceHardwareDisksOutputReference <a name="LightsailInstanceHardwareDisksOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceHardwareDisksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachedTo">reset_attached_to</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachmentState">reset_attachment_state</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetDiskName">reset_disk_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIops">reset_iops</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIsSystemDisk">reset_is_system_disk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetSizeInGb">reset_size_in_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_attached_to` <a name="reset_attached_to" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachedTo"></a>

```python
def reset_attached_to() -> None
```

##### `reset_attachment_state` <a name="reset_attachment_state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetAttachmentState"></a>

```python
def reset_attachment_state() -> None
```

##### `reset_disk_name` <a name="reset_disk_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetDiskName"></a>

```python
def reset_disk_name() -> None
```

##### `reset_iops` <a name="reset_iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIops"></a>

```python
def reset_iops() -> None
```

##### `reset_is_system_disk` <a name="reset_is_system_disk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetIsSystemDisk"></a>

```python
def reset_is_system_disk() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_size_in_gb` <a name="reset_size_in_gb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.resetSizeInGb"></a>

```python
def reset_size_in_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedToInput">attached_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentStateInput">attachment_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskNameInput">disk_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iopsInput">iops_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDiskInput">is_system_disk_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGbInput">size_in_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedTo">attached_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentState">attachment_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskName">disk_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iops">iops</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDisk">is_system_disk</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGb">size_in_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attached_to_input`<sup>Optional</sup> <a name="attached_to_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedToInput"></a>

```python
attached_to_input: str
```

- *Type:* str

---

##### `attachment_state_input`<sup>Optional</sup> <a name="attachment_state_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentStateInput"></a>

```python
attachment_state_input: str
```

- *Type:* str

---

##### `disk_name_input`<sup>Optional</sup> <a name="disk_name_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskNameInput"></a>

```python
disk_name_input: str
```

- *Type:* str

---

##### `iops_input`<sup>Optional</sup> <a name="iops_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iopsInput"></a>

```python
iops_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_system_disk_input`<sup>Optional</sup> <a name="is_system_disk_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDiskInput"></a>

```python
is_system_disk_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `size_in_gb_input`<sup>Optional</sup> <a name="size_in_gb_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGbInput"></a>

```python
size_in_gb_input: str
```

- *Type:* str

---

##### `attached_to`<sup>Required</sup> <a name="attached_to" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachedTo"></a>

```python
attached_to: str
```

- *Type:* str

---

##### `attachment_state`<sup>Required</sup> <a name="attachment_state" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.attachmentState"></a>

```python
attachment_state: str
```

- *Type:* str

---

##### `disk_name`<sup>Required</sup> <a name="disk_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.diskName"></a>

```python
disk_name: str
```

- *Type:* str

---

##### `iops`<sup>Required</sup> <a name="iops" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.iops"></a>

```python
iops: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_system_disk`<sup>Required</sup> <a name="is_system_disk" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.isSystemDisk"></a>

```python
is_system_disk: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `size_in_gb`<sup>Required</sup> <a name="size_in_gb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.sizeInGb"></a>

```python
size_in_gb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceHardwareDisks
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>

---


### LightsailInstanceHardwareOutputReference <a name="LightsailInstanceHardwareOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceHardwareOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks">put_disks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resetDisks">reset_disks</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_disks` <a name="put_disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks"></a>

```python
def put_disks(
  value: IResolvable | typing.List[LightsailInstanceHardwareDisks]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.putDisks.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]

---

##### `reset_disks` <a name="reset_disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.resetDisks"></a>

```python
def reset_disks() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.cpuCount">cpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disks">disks</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList">LightsailInstanceHardwareDisksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.ramSizeInGb">ram_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disksInput">disks_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_count`<sup>Required</sup> <a name="cpu_count" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.cpuCount"></a>

```python
cpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disks`<sup>Required</sup> <a name="disks" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disks"></a>

```python
disks: LightsailInstanceHardwareDisksList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisksList">LightsailInstanceHardwareDisksList</a>

---

##### `ram_size_in_gb`<sup>Required</sup> <a name="ram_size_in_gb" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.ramSizeInGb"></a>

```python
ram_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `disks_input`<sup>Optional</sup> <a name="disks_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.disksInput"></a>

```python
disks_input: IResolvable | typing.List[LightsailInstanceHardwareDisks]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareDisks">LightsailInstanceHardwareDisks</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardwareOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceHardware
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceHardware">LightsailInstanceHardware</a>

---


### LightsailInstanceLocationOutputReference <a name="LightsailInstanceLocationOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.regionName">region_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `region_name`<sup>Required</sup> <a name="region_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.regionName"></a>

```python
region_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceLocation
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceLocation">LightsailInstanceLocation</a>

---


### LightsailInstanceNetworkingMonthlyTransferOutputReference <a name="LightsailInstanceNetworkingMonthlyTransferOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated">gb_per_month_allocated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `gb_per_month_allocated`<sup>Required</sup> <a name="gb_per_month_allocated" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.gbPerMonthAllocated"></a>

```python
gb_per_month_allocated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceNetworkingMonthlyTransfer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

---


### LightsailInstanceNetworkingOutputReference <a name="LightsailInstanceNetworkingOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworkingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer">put_monthly_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts">put_ports</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetMonthlyTransfer">reset_monthly_transfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetPorts">reset_ports</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_monthly_transfer` <a name="put_monthly_transfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putMonthlyTransfer"></a>

```python
def put_monthly_transfer() -> None
```

##### `put_ports` <a name="put_ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts"></a>

```python
def put_ports(
  value: IResolvable | typing.List[LightsailInstanceNetworkingPorts]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.putPorts.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]

---

##### `reset_monthly_transfer` <a name="reset_monthly_transfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetMonthlyTransfer"></a>

```python
def reset_monthly_transfer() -> None
```

##### `reset_ports` <a name="reset_ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransfer">monthly_transfer</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference">LightsailInstanceNetworkingMonthlyTransferOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.ports">ports</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList">LightsailInstanceNetworkingPortsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransferInput">monthly_transfer_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.portsInput">ports_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `monthly_transfer`<sup>Required</sup> <a name="monthly_transfer" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransfer"></a>

```python
monthly_transfer: LightsailInstanceNetworkingMonthlyTransferOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransferOutputReference">LightsailInstanceNetworkingMonthlyTransferOutputReference</a>

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.ports"></a>

```python
ports: LightsailInstanceNetworkingPortsList
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList">LightsailInstanceNetworkingPortsList</a>

---

##### `monthly_transfer_input`<sup>Optional</sup> <a name="monthly_transfer_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.monthlyTransferInput"></a>

```python
monthly_transfer_input: IResolvable | LightsailInstanceNetworkingMonthlyTransfer
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingMonthlyTransfer">LightsailInstanceNetworkingMonthlyTransfer</a>

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.portsInput"></a>

```python
ports_input: IResolvable | typing.List[LightsailInstanceNetworkingPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceNetworking
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworking">LightsailInstanceNetworking</a>

---


### LightsailInstanceNetworkingPortsList <a name="LightsailInstanceNetworkingPortsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworkingPortsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailInstanceNetworkingPortsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailInstanceNetworkingPorts]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>]

---


### LightsailInstanceNetworkingPortsOutputReference <a name="LightsailInstanceNetworkingPortsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceNetworkingPortsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessDirection">reset_access_direction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessFrom">reset_access_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessType">reset_access_type</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrListAliases">reset_cidr_list_aliases</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrs">reset_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetFromPort">reset_from_port</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetIpv6Cidrs">reset_ipv6_cidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetToPort">reset_to_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access_direction` <a name="reset_access_direction" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessDirection"></a>

```python
def reset_access_direction() -> None
```

##### `reset_access_from` <a name="reset_access_from" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessFrom"></a>

```python
def reset_access_from() -> None
```

##### `reset_access_type` <a name="reset_access_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetAccessType"></a>

```python
def reset_access_type() -> None
```

##### `reset_cidr_list_aliases` <a name="reset_cidr_list_aliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrListAliases"></a>

```python
def reset_cidr_list_aliases() -> None
```

##### `reset_cidrs` <a name="reset_cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCidrs"></a>

```python
def reset_cidrs() -> None
```

##### `reset_common_name` <a name="reset_common_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_from_port` <a name="reset_from_port" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetFromPort"></a>

```python
def reset_from_port() -> None
```

##### `reset_ipv6_cidrs` <a name="reset_ipv6_cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetIpv6Cidrs"></a>

```python
def reset_ipv6_cidrs() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_to_port` <a name="reset_to_port" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.resetToPort"></a>

```python
def reset_to_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirectionInput">access_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFromInput">access_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliasesInput">cidr_list_aliases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrsInput">cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPortInput">from_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6CidrsInput">ipv6_cidrs_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPortInput">to_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirection">access_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFrom">access_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases">cidr_list_aliases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrs">cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPort">from_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs">ipv6_cidrs</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPort">to_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_direction_input`<sup>Optional</sup> <a name="access_direction_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirectionInput"></a>

```python
access_direction_input: str
```

- *Type:* str

---

##### `access_from_input`<sup>Optional</sup> <a name="access_from_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFromInput"></a>

```python
access_from_input: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `cidr_list_aliases_input`<sup>Optional</sup> <a name="cidr_list_aliases_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliasesInput"></a>

```python
cidr_list_aliases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs_input`<sup>Optional</sup> <a name="cidrs_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrsInput"></a>

```python
cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `from_port_input`<sup>Optional</sup> <a name="from_port_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPortInput"></a>

```python
from_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidrs_input`<sup>Optional</sup> <a name="ipv6_cidrs_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6CidrsInput"></a>

```python
ipv6_cidrs_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `to_port_input`<sup>Optional</sup> <a name="to_port_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPortInput"></a>

```python
to_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `access_direction`<sup>Required</sup> <a name="access_direction" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessDirection"></a>

```python
access_direction: str
```

- *Type:* str

---

##### `access_from`<sup>Required</sup> <a name="access_from" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessFrom"></a>

```python
access_from: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `cidr_list_aliases`<sup>Required</sup> <a name="cidr_list_aliases" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrListAliases"></a>

```python
cidr_list_aliases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cidrs`<sup>Required</sup> <a name="cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.cidrs"></a>

```python
cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `from_port`<sup>Required</sup> <a name="from_port" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.fromPort"></a>

```python
from_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipv6_cidrs`<sup>Required</sup> <a name="ipv6_cidrs" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.ipv6Cidrs"></a>

```python
ipv6_cidrs: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `to_port`<sup>Required</sup> <a name="to_port" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.toPort"></a>

```python
to_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPortsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceNetworkingPorts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceNetworkingPorts">LightsailInstanceNetworkingPorts</a>

---


### LightsailInstanceStateOutputReference <a name="LightsailInstanceStateOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceStateOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceState
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceState">LightsailInstanceState</a>

---


### LightsailInstanceTagsList <a name="LightsailInstanceTagsList" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> LightsailInstanceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[LightsailInstanceTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>]

---


### LightsailInstanceTagsOutputReference <a name="LightsailInstanceTagsOutputReference" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import lightsail_instance

lightsailInstance.LightsailInstanceTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | LightsailInstanceTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailInstance.LightsailInstanceTags">LightsailInstanceTags</a>

---



