# `ec2IpamPrefixListResolverTarget` Submodule <a name="`ec2IpamPrefixListResolverTarget` Submodule" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPrefixListResolverTarget <a name="Ec2IpamPrefixListResolverTarget" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target awscc_ec2_ipam_prefix_list_resolver_target}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipam_prefix_list_resolver_id: str,
  prefix_list_id: str,
  prefix_list_region: str,
  track_latest_version: bool | IResolvable,
  desired_version: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[Ec2IpamPrefixListResolverTargetTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.ipamPrefixListResolverId">ipam_prefix_list_resolver_id</a></code> | <code>str</code> | The Id of the IPAM Prefix List Resolver associated with this Target. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListId">prefix_list_id</a></code> | <code>str</code> | The Id of the Managed Prefix List. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListRegion">prefix_list_region</a></code> | <code>str</code> | The region that the Managed Prefix List is located in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.trackLatestVersion">track_latest_version</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.desiredVersion">desired_version</a></code> | <code>typing.Union[int, float]</code> | The desired version of the Prefix List Resolver that this Target should synchronize with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipam_prefix_list_resolver_id`<sup>Required</sup> <a name="ipam_prefix_list_resolver_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.ipamPrefixListResolverId"></a>

- *Type:* str

The Id of the IPAM Prefix List Resolver associated with this Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id Ec2IpamPrefixListResolverTarget#ipam_prefix_list_resolver_id}

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListId"></a>

- *Type:* str

The Id of the Managed Prefix List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id Ec2IpamPrefixListResolverTarget#prefix_list_id}

---

##### `prefix_list_region`<sup>Required</sup> <a name="prefix_list_region" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.prefixListRegion"></a>

- *Type:* str

The region that the Managed Prefix List is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region Ec2IpamPrefixListResolverTarget#prefix_list_region}

---

##### `track_latest_version`<sup>Required</sup> <a name="track_latest_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.trackLatestVersion"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version Ec2IpamPrefixListResolverTarget#track_latest_version}

---

##### `desired_version`<sup>Optional</sup> <a name="desired_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.desiredVersion"></a>

- *Type:* typing.Union[int, float]

The desired version of the Prefix List Resolver that this Target should synchronize with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version Ec2IpamPrefixListResolverTarget#desired_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags Ec2IpamPrefixListResolverTarget#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion">reset_desired_version</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2IpamPrefixListResolverTargetTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]

---

##### `reset_desired_version` <a name="reset_desired_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetDesiredVersion"></a>

```python
def reset_desired_version() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2IpamPrefixListResolverTarget resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2IpamPrefixListResolverTarget to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2IpamPrefixListResolverTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPrefixListResolverTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn">ipam_prefix_list_resolver_target_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId">ipam_prefix_list_resolver_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput">desired_version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput">ipam_prefix_list_resolver_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput">prefix_list_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput">prefix_list_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput">track_latest_version_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion">desired_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId">ipam_prefix_list_resolver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion">prefix_list_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion">track_latest_version</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ipam_prefix_list_resolver_target_arn`<sup>Required</sup> <a name="ipam_prefix_list_resolver_target_arn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetArn"></a>

```python
ipam_prefix_list_resolver_target_arn: str
```

- *Type:* str

---

##### `ipam_prefix_list_resolver_target_id`<sup>Required</sup> <a name="ipam_prefix_list_resolver_target_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverTargetId"></a>

```python
ipam_prefix_list_resolver_target_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tags"></a>

```python
tags: Ec2IpamPrefixListResolverTargetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList">Ec2IpamPrefixListResolverTargetTagsList</a>

---

##### `desired_version_input`<sup>Optional</sup> <a name="desired_version_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersionInput"></a>

```python
desired_version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipam_prefix_list_resolver_id_input`<sup>Optional</sup> <a name="ipam_prefix_list_resolver_id_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverIdInput"></a>

```python
ipam_prefix_list_resolver_id_input: str
```

- *Type:* str

---

##### `prefix_list_id_input`<sup>Optional</sup> <a name="prefix_list_id_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListIdInput"></a>

```python
prefix_list_id_input: str
```

- *Type:* str

---

##### `prefix_list_region_input`<sup>Optional</sup> <a name="prefix_list_region_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegionInput"></a>

```python
prefix_list_region_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2IpamPrefixListResolverTargetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]

---

##### `track_latest_version_input`<sup>Optional</sup> <a name="track_latest_version_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersionInput"></a>

```python
track_latest_version_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `desired_version`<sup>Required</sup> <a name="desired_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.desiredVersion"></a>

```python
desired_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ipam_prefix_list_resolver_id`<sup>Required</sup> <a name="ipam_prefix_list_resolver_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.ipamPrefixListResolverId"></a>

```python
ipam_prefix_list_resolver_id: str
```

- *Type:* str

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

---

##### `prefix_list_region`<sup>Required</sup> <a name="prefix_list_region" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.prefixListRegion"></a>

```python
prefix_list_region: str
```

- *Type:* str

---

##### `track_latest_version`<sup>Required</sup> <a name="track_latest_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.trackLatestVersion"></a>

```python
track_latest_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTarget.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPrefixListResolverTargetConfig <a name="Ec2IpamPrefixListResolverTargetConfig" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ipam_prefix_list_resolver_id: str,
  prefix_list_id: str,
  prefix_list_region: str,
  track_latest_version: bool | IResolvable,
  desired_version: typing.Union[int, float] = None,
  tags: IResolvable | typing.List[Ec2IpamPrefixListResolverTargetTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId">ipam_prefix_list_resolver_id</a></code> | <code>str</code> | The Id of the IPAM Prefix List Resolver associated with this Target. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId">prefix_list_id</a></code> | <code>str</code> | The Id of the Managed Prefix List. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion">prefix_list_region</a></code> | <code>str</code> | The region that the Managed Prefix List is located in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion">track_latest_version</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion">desired_version</a></code> | <code>typing.Union[int, float]</code> | The desired version of the Prefix List Resolver that this Target should synchronize with. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ipam_prefix_list_resolver_id`<sup>Required</sup> <a name="ipam_prefix_list_resolver_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.ipamPrefixListResolverId"></a>

```python
ipam_prefix_list_resolver_id: str
```

- *Type:* str

The Id of the IPAM Prefix List Resolver associated with this Target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#ipam_prefix_list_resolver_id Ec2IpamPrefixListResolverTarget#ipam_prefix_list_resolver_id}

---

##### `prefix_list_id`<sup>Required</sup> <a name="prefix_list_id" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListId"></a>

```python
prefix_list_id: str
```

- *Type:* str

The Id of the Managed Prefix List.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_id Ec2IpamPrefixListResolverTarget#prefix_list_id}

---

##### `prefix_list_region`<sup>Required</sup> <a name="prefix_list_region" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.prefixListRegion"></a>

```python
prefix_list_region: str
```

- *Type:* str

The region that the Managed Prefix List is located in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#prefix_list_region Ec2IpamPrefixListResolverTarget#prefix_list_region}

---

##### `track_latest_version`<sup>Required</sup> <a name="track_latest_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.trackLatestVersion"></a>

```python
track_latest_version: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether this Target automatically tracks the latest version of the Prefix List Resolver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#track_latest_version Ec2IpamPrefixListResolverTarget#track_latest_version}

---

##### `desired_version`<sup>Optional</sup> <a name="desired_version" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.desiredVersion"></a>

```python
desired_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The desired version of the Prefix List Resolver that this Target should synchronize with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#desired_version Ec2IpamPrefixListResolverTarget#desired_version}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2IpamPrefixListResolverTargetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#tags Ec2IpamPrefixListResolverTarget#tags}

---

### Ec2IpamPrefixListResolverTargetTags <a name="Ec2IpamPrefixListResolverTargetTags" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#key Ec2IpamPrefixListResolverTarget#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_ipam_prefix_list_resolver_target#value Ec2IpamPrefixListResolverTarget#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPrefixListResolverTargetTagsList <a name="Ec2IpamPrefixListResolverTargetTagsList" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2IpamPrefixListResolverTargetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2IpamPrefixListResolverTargetTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>]

---


### Ec2IpamPrefixListResolverTargetTagsOutputReference <a name="Ec2IpamPrefixListResolverTargetTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_ipam_prefix_list_resolver_target

ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2IpamPrefixListResolverTargetTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2IpamPrefixListResolverTarget.Ec2IpamPrefixListResolverTargetTags">Ec2IpamPrefixListResolverTargetTags</a>

---



