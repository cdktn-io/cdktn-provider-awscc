# `ec2VpcBlockPublicAccessExclusion` Submodule <a name="`ec2VpcBlockPublicAccessExclusion` Submodule" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VpcBlockPublicAccessExclusion <a name="Ec2VpcBlockPublicAccessExclusion" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion awscc_ec2_vpc_block_public_access_exclusion}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  internet_gateway_exclusion_mode: str,
  subnet_id: str = None,
  tags: IResolvable | typing.List[Ec2VpcBlockPublicAccessExclusionTags] = None,
  vpc_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.internetGatewayExclusionMode">internet_gateway_exclusion_mode</a></code> | <code>str</code> | The desired Block Public Access Exclusion Mode for a specific VPC/Subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet. Required only if you don't specify VpcId. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the vpc. Required only if you don't specify SubnetId. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `internet_gateway_exclusion_mode`<sup>Required</sup> <a name="internet_gateway_exclusion_mode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.internetGatewayExclusionMode"></a>

- *Type:* str

The desired Block Public Access Exclusion Mode for a specific VPC/Subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#internet_gateway_exclusion_mode Ec2VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet. Required only if you don't specify VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#subnet_id Ec2VpcBlockPublicAccessExclusion#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#tags Ec2VpcBlockPublicAccessExclusion#tags}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the vpc. Required only if you don't specify SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#vpc_id Ec2VpcBlockPublicAccessExclusion#vpc_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetVpcId">reset_vpc_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2VpcBlockPublicAccessExclusionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]

---

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_id` <a name="reset_vpc_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.resetVpcId"></a>

```python
def reset_vpc_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2VpcBlockPublicAccessExclusion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2VpcBlockPublicAccessExclusion to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2VpcBlockPublicAccessExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VpcBlockPublicAccessExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.exclusionId">exclusion_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList">Ec2VpcBlockPublicAccessExclusionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput">internet_gateway_exclusion_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode">internet_gateway_exclusion_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `exclusion_id`<sup>Required</sup> <a name="exclusion_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.exclusionId"></a>

```python
exclusion_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tags"></a>

```python
tags: Ec2VpcBlockPublicAccessExclusionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList">Ec2VpcBlockPublicAccessExclusionTagsList</a>

---

##### `internet_gateway_exclusion_mode_input`<sup>Optional</sup> <a name="internet_gateway_exclusion_mode_input" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionModeInput"></a>

```python
internet_gateway_exclusion_mode_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2VpcBlockPublicAccessExclusionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `internet_gateway_exclusion_mode`<sup>Required</sup> <a name="internet_gateway_exclusion_mode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.internetGatewayExclusionMode"></a>

```python
internet_gateway_exclusion_mode: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusion.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VpcBlockPublicAccessExclusionConfig <a name="Ec2VpcBlockPublicAccessExclusionConfig" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  internet_gateway_exclusion_mode: str,
  subnet_id: str = None,
  tags: IResolvable | typing.List[Ec2VpcBlockPublicAccessExclusionTags] = None,
  vpc_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode">internet_gateway_exclusion_mode</a></code> | <code>str</code> | The desired Block Public Access Exclusion Mode for a specific VPC/Subnet. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet. Required only if you don't specify VpcId. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the vpc. Required only if you don't specify SubnetId. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `internet_gateway_exclusion_mode`<sup>Required</sup> <a name="internet_gateway_exclusion_mode" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.internetGatewayExclusionMode"></a>

```python
internet_gateway_exclusion_mode: str
```

- *Type:* str

The desired Block Public Access Exclusion Mode for a specific VPC/Subnet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#internet_gateway_exclusion_mode Ec2VpcBlockPublicAccessExclusion#internet_gateway_exclusion_mode}

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet. Required only if you don't specify VpcId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#subnet_id Ec2VpcBlockPublicAccessExclusion#subnet_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2VpcBlockPublicAccessExclusionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#tags Ec2VpcBlockPublicAccessExclusion#tags}

---

##### `vpc_id`<sup>Optional</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the vpc. Required only if you don't specify SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#vpc_id Ec2VpcBlockPublicAccessExclusion#vpc_id}

---

### Ec2VpcBlockPublicAccessExclusionTags <a name="Ec2VpcBlockPublicAccessExclusionTags" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.key">key</a></code> | <code>str</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.value">value</a></code> | <code>str</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.key"></a>

```python
key: str
```

- *Type:* str

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#key Ec2VpcBlockPublicAccessExclusion#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags.property.value"></a>

```python
value: str
```

- *Type:* str

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_vpc_block_public_access_exclusion#value Ec2VpcBlockPublicAccessExclusion#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VpcBlockPublicAccessExclusionTagsList <a name="Ec2VpcBlockPublicAccessExclusionTagsList" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2VpcBlockPublicAccessExclusionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2VpcBlockPublicAccessExclusionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>]

---


### Ec2VpcBlockPublicAccessExclusionTagsOutputReference <a name="Ec2VpcBlockPublicAccessExclusionTagsOutputReference" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_vpc_block_public_access_exclusion

ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2VpcBlockPublicAccessExclusionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2VpcBlockPublicAccessExclusion.Ec2VpcBlockPublicAccessExclusionTags">Ec2VpcBlockPublicAccessExclusionTags</a>

---



