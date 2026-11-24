# `ec2FcaPolicy` Submodule <a name="`ec2FcaPolicy` Submodule" id="@cdktn/provider-awscc.ec2FcaPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FcaPolicy <a name="Ec2FcaPolicy" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy awscc_ec2_fca_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network_resource_type: str,
  description: str = None,
  instance_fca_policy_document: Ec2FcaPolicyInstanceFcaPolicyDocument = None,
  nat_fca_policy_document: Ec2FcaPolicyNatFcaPolicyDocument = None,
  pcx_fca_policy_document: Ec2FcaPolicyPcxFcaPolicyDocument = None,
  show_back_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[Ec2FcaPolicyTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.networkResourceType">network_resource_type</a></code> | <code>str</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.instanceFcaPolicyDocument">instance_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.natFcaPolicyDocument">nat_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.pcxFcaPolicyDocument">pcx_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.showBackEnabled">show_back_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]</code> | The tags for the FCA policy. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `network_resource_type`<sup>Required</sup> <a name="network_resource_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.networkResourceType"></a>

- *Type:* str

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.description"></a>

- *Type:* str

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `instance_fca_policy_document`<sup>Optional</sup> <a name="instance_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.instanceFcaPolicyDocument"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `nat_fca_policy_document`<sup>Optional</sup> <a name="nat_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.natFcaPolicyDocument"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `pcx_fca_policy_document`<sup>Optional</sup> <a name="pcx_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.pcxFcaPolicyDocument"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `show_back_enabled`<sup>Optional</sup> <a name="show_back_enabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.showBackEnabled"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument">put_instance_fca_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument">put_nat_fca_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument">put_pcx_fca_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument">reset_instance_fca_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument">reset_nat_fca_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument">reset_pcx_fca_policy_document</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled">reset_show_back_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance_fca_policy_document` <a name="put_instance_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument"></a>

```python
def put_instance_fca_policy_document(
  cidr_range_specifications: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications = None,
  dimensions: typing.List[str] = None,
  reporting_granularity: typing.List[str] = None
) -> None
```

###### `cidr_range_specifications`<sup>Optional</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.cidrRangeSpecifications"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.dimensions"></a>

- *Type:* typing.List[str]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

###### `reporting_granularity`<sup>Optional</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putInstanceFcaPolicyDocument.parameter.reportingGranularity"></a>

- *Type:* typing.List[str]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

##### `put_nat_fca_policy_document` <a name="put_nat_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument"></a>

```python
def put_nat_fca_policy_document(
  cidr_range_specifications: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications = None,
  dimensions: typing.List[str] = None,
  reporting_granularity: typing.List[str] = None
) -> None
```

###### `cidr_range_specifications`<sup>Optional</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.cidrRangeSpecifications"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.dimensions"></a>

- *Type:* typing.List[str]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

###### `reporting_granularity`<sup>Optional</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putNatFcaPolicyDocument.parameter.reportingGranularity"></a>

- *Type:* typing.List[str]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

##### `put_pcx_fca_policy_document` <a name="put_pcx_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument"></a>

```python
def put_pcx_fca_policy_document(
  cidr_range_specifications: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications = None,
  dimensions: typing.List[str] = None,
  reporting_granularity: typing.List[str] = None
) -> None
```

###### `cidr_range_specifications`<sup>Optional</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.cidrRangeSpecifications"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

###### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.dimensions"></a>

- *Type:* typing.List[str]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

###### `reporting_granularity`<sup>Optional</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putPcxFcaPolicyDocument.parameter.reportingGranularity"></a>

- *Type:* typing.List[str]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2FcaPolicyTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_instance_fca_policy_document` <a name="reset_instance_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetInstanceFcaPolicyDocument"></a>

```python
def reset_instance_fca_policy_document() -> None
```

##### `reset_nat_fca_policy_document` <a name="reset_nat_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetNatFcaPolicyDocument"></a>

```python
def reset_nat_fca_policy_document() -> None
```

##### `reset_pcx_fca_policy_document` <a name="reset_pcx_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetPcxFcaPolicyDocument"></a>

```python
def reset_pcx_fca_policy_document() -> None
```

##### `reset_show_back_enabled` <a name="reset_show_back_enabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetShowBackEnabled"></a>

```python
def reset_show_back_enabled() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2FcaPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2FcaPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2FcaPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FcaPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId">fca_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument">instance_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion">latest_version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument">nat_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount">owner_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument">pcx_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt">policy_created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt">version_expected_effective_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput">instance_fca_policy_document_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput">nat_fca_policy_document_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput">network_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput">pcx_fca_policy_document_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput">show_back_enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType">network_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled">show_back_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `fca_policy_id`<sup>Required</sup> <a name="fca_policy_id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.fcaPolicyId"></a>

```python
fca_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_fca_policy_document`<sup>Required</sup> <a name="instance_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocument"></a>

```python
instance_fca_policy_document: Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference</a>

---

##### `latest_version`<sup>Required</sup> <a name="latest_version" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.latestVersion"></a>

```python
latest_version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nat_fca_policy_document`<sup>Required</sup> <a name="nat_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocument"></a>

```python
nat_fca_policy_document: Ec2FcaPolicyNatFcaPolicyDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentOutputReference</a>

---

##### `owner_account`<sup>Required</sup> <a name="owner_account" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.ownerAccount"></a>

```python
owner_account: str
```

- *Type:* str

---

##### `pcx_fca_policy_document`<sup>Required</sup> <a name="pcx_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocument"></a>

```python
pcx_fca_policy_document: Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference</a>

---

##### `policy_created_at`<sup>Required</sup> <a name="policy_created_at" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.policyCreatedAt"></a>

```python
policy_created_at: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tags"></a>

```python
tags: Ec2FcaPolicyTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList">Ec2FcaPolicyTagsList</a>

---

##### `version_expected_effective_at`<sup>Required</sup> <a name="version_expected_effective_at" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.versionExpectedEffectiveAt"></a>

```python
version_expected_effective_at: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `instance_fca_policy_document_input`<sup>Optional</sup> <a name="instance_fca_policy_document_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.instanceFcaPolicyDocumentInput"></a>

```python
instance_fca_policy_document_input: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---

##### `nat_fca_policy_document_input`<sup>Optional</sup> <a name="nat_fca_policy_document_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.natFcaPolicyDocumentInput"></a>

```python
nat_fca_policy_document_input: IResolvable | Ec2FcaPolicyNatFcaPolicyDocument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---

##### `network_resource_type_input`<sup>Optional</sup> <a name="network_resource_type_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceTypeInput"></a>

```python
network_resource_type_input: str
```

- *Type:* str

---

##### `pcx_fca_policy_document_input`<sup>Optional</sup> <a name="pcx_fca_policy_document_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.pcxFcaPolicyDocumentInput"></a>

```python
pcx_fca_policy_document_input: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---

##### `show_back_enabled_input`<sup>Optional</sup> <a name="show_back_enabled_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabledInput"></a>

```python
show_back_enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2FcaPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `network_resource_type`<sup>Required</sup> <a name="network_resource_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.networkResourceType"></a>

```python
network_resource_type: str
```

- *Type:* str

---

##### `show_back_enabled`<sup>Required</sup> <a name="show_back_enabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.showBackEnabled"></a>

```python
show_back_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FcaPolicyConfig <a name="Ec2FcaPolicyConfig" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  network_resource_type: str,
  description: str = None,
  instance_fca_policy_document: Ec2FcaPolicyInstanceFcaPolicyDocument = None,
  nat_fca_policy_document: Ec2FcaPolicyNatFcaPolicyDocument = None,
  pcx_fca_policy_document: Ec2FcaPolicyPcxFcaPolicyDocument = None,
  show_back_enabled: bool | IResolvable = None,
  tags: IResolvable | typing.List[Ec2FcaPolicyTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType">network_resource_type</a></code> | <code>str</code> | The type of network resource the FCA policy applies to. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description">description</a></code> | <code>str</code> | The description of the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument">instance_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | The FCA policy document for EC2 instance cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument">nat_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | The FCA policy document for NAT gateway cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument">pcx_fca_policy_document</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | The FCA policy document for VPC peering connection cost allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled">show_back_enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether show-back reporting is enabled for the FCA policy. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]</code> | The tags for the FCA policy. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `network_resource_type`<sup>Required</sup> <a name="network_resource_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.networkResourceType"></a>

```python
network_resource_type: str
```

- *Type:* str

The type of network resource the FCA policy applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#network_resource_type Ec2FcaPolicy#network_resource_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#description Ec2FcaPolicy#description}

---

##### `instance_fca_policy_document`<sup>Optional</sup> <a name="instance_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.instanceFcaPolicyDocument"></a>

```python
instance_fca_policy_document: Ec2FcaPolicyInstanceFcaPolicyDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

The FCA policy document for EC2 instance cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#instance_fca_policy_document Ec2FcaPolicy#instance_fca_policy_document}

---

##### `nat_fca_policy_document`<sup>Optional</sup> <a name="nat_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.natFcaPolicyDocument"></a>

```python
nat_fca_policy_document: Ec2FcaPolicyNatFcaPolicyDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

The FCA policy document for NAT gateway cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#nat_fca_policy_document Ec2FcaPolicy#nat_fca_policy_document}

---

##### `pcx_fca_policy_document`<sup>Optional</sup> <a name="pcx_fca_policy_document" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.pcxFcaPolicyDocument"></a>

```python
pcx_fca_policy_document: Ec2FcaPolicyPcxFcaPolicyDocument
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

The FCA policy document for VPC peering connection cost allocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#pcx_fca_policy_document Ec2FcaPolicy#pcx_fca_policy_document}

---

##### `show_back_enabled`<sup>Optional</sup> <a name="show_back_enabled" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.showBackEnabled"></a>

```python
show_back_enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether show-back reporting is enabled for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#show_back_enabled Ec2FcaPolicy#show_back_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2FcaPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]

The tags for the FCA policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#tags Ec2FcaPolicy#tags}

---

### Ec2FcaPolicyInstanceFcaPolicyDocument <a name="Ec2FcaPolicyInstanceFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument(
  cidr_range_specifications: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications = None,
  dimensions: typing.List[str] = None,
  reporting_granularity: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications">cidr_range_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity">reporting_granularity</a></code> | <code>typing.List[str]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidr_range_specifications`<sup>Optional</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```python
cidr_range_specifications: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reporting_granularity`<sup>Optional</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument.property.reportingGranularity"></a>

```python
reporting_granularity: typing.List[str]
```

- *Type:* typing.List[str]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications(
  prefixes: IResolvable | typing.List[Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes] = None,
  prefixes_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixes_type</a></code> | <code>str</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```python
prefixes: IResolvable | typing.List[Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixes_type`<sup>Optional</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```python
prefixes_type: str
```

- *Type:* str

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes(
  cidr_label: str = None,
  cidr_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidr_label</a></code> | <code>str</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidr_range</a></code> | <code>str</code> | The CIDR range. |

---

##### `cidr_label`<sup>Optional</sup> <a name="cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```python
cidr_label: str
```

- *Type:* str

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidr_range`<sup>Optional</sup> <a name="cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyNatFcaPolicyDocument <a name="Ec2FcaPolicyNatFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument(
  cidr_range_specifications: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications = None,
  dimensions: typing.List[str] = None,
  reporting_granularity: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications">cidr_range_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity">reporting_granularity</a></code> | <code>typing.List[str]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidr_range_specifications`<sup>Optional</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```python
cidr_range_specifications: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reporting_granularity`<sup>Optional</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument.property.reportingGranularity"></a>

```python
reporting_granularity: typing.List[str]
```

- *Type:* typing.List[str]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications(
  prefixes: IResolvable | typing.List[Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes] = None,
  prefixes_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixes_type</a></code> | <code>str</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```python
prefixes: IResolvable | typing.List[Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixes_type`<sup>Optional</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```python
prefixes_type: str
```

- *Type:* str

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes(
  cidr_label: str = None,
  cidr_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidr_label</a></code> | <code>str</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidr_range</a></code> | <code>str</code> | The CIDR range. |

---

##### `cidr_label`<sup>Optional</sup> <a name="cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```python
cidr_label: str
```

- *Type:* str

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidr_range`<sup>Optional</sup> <a name="cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyPcxFcaPolicyDocument <a name="Ec2FcaPolicyPcxFcaPolicyDocument" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument(
  cidr_range_specifications: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications = None,
  dimensions: typing.List[str] = None,
  reporting_granularity: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications">cidr_range_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | CIDR range specifications, used when the reporting granularity is 'cidr'. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | The cost dimensions to allocate. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity">reporting_granularity</a></code> | <code>typing.List[str]</code> | The granularity at which costs are reported. Contains exactly one value. |

---

##### `cidr_range_specifications`<sup>Optional</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.cidrRangeSpecifications"></a>

```python
cidr_range_specifications: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

CIDR range specifications, used when the reporting granularity is 'cidr'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range_specifications Ec2FcaPolicy#cidr_range_specifications}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

The cost dimensions to allocate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#dimensions Ec2FcaPolicy#dimensions}

---

##### `reporting_granularity`<sup>Optional</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument.property.reportingGranularity"></a>

```python
reporting_granularity: typing.List[str]
```

- *Type:* typing.List[str]

The granularity at which costs are reported. Contains exactly one value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#reporting_granularity Ec2FcaPolicy#reporting_granularity}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications(
  prefixes: IResolvable | typing.List[Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes] = None,
  prefixes_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes">prefixes</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | The CIDR range to label mappings. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType">prefixes_type</a></code> | <code>str</code> | The type of prefixes the mappings apply to. |

---

##### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixes"></a>

```python
prefixes: IResolvable | typing.List[Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

##### `prefixes_type`<sup>Optional</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications.property.prefixesType"></a>

```python
prefixes_type: str
```

- *Type:* str

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes(
  cidr_label: str = None,
  cidr_range: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel">cidr_label</a></code> | <code>str</code> | The label for the CIDR range. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange">cidr_range</a></code> | <code>str</code> | The CIDR range. |

---

##### `cidr_label`<sup>Optional</sup> <a name="cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrLabel"></a>

```python
cidr_label: str
```

- *Type:* str

The label for the CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_label Ec2FcaPolicy#cidr_label}

---

##### `cidr_range`<sup>Optional</sup> <a name="cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

The CIDR range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#cidr_range Ec2FcaPolicy#cidr_range}

---

### Ec2FcaPolicyTags <a name="Ec2FcaPolicyTags" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#key Ec2FcaPolicy#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#value Ec2FcaPolicy#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">put_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">reset_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">reset_prefixes_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prefixes` <a name="put_prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```python
def put_prefixes(
  value: IResolvable | typing.List[Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---

##### `reset_prefixes` <a name="reset_prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```python
def reset_prefixes() -> None
```

##### `reset_prefixes_type` <a name="reset_prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```python
def reset_prefixes_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixes_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixes_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```python
prefixes: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixes_input`<sup>Optional</sup> <a name="prefixes_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```python
prefixes_input: IResolvable | typing.List[Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---

##### `prefixes_type_input`<sup>Optional</sup> <a name="prefixes_type_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```python
prefixes_type_input: str
```

- *Type:* str

---

##### `prefixes_type`<sup>Required</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```python
prefixes_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">reset_cidr_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">reset_cidr_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_label` <a name="reset_cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```python
def reset_cidr_label() -> None
```

##### `reset_cidr_range` <a name="reset_cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```python
def reset_cidr_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidr_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidr_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_label_input`<sup>Optional</sup> <a name="cidr_label_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```python
cidr_label_input: str
```

- *Type:* str

---

##### `cidr_range_input`<sup>Optional</sup> <a name="cidr_range_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```python
cidr_range_input: str
```

- *Type:* str

---

##### `cidr_label`<sup>Required</sup> <a name="cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```python
cidr_label: str
```

- *Type:* str

---

##### `cidr_range`<sup>Required</sup> <a name="cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">put_cidr_range_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">reset_cidr_range_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity">reset_reporting_granularity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cidr_range_specifications` <a name="put_cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```python
def put_cidr_range_specifications(
  prefixes: IResolvable | typing.List[Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes] = None,
  prefixes_type: str = None
) -> None
```

###### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.prefixes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

###### `prefixes_type`<sup>Optional</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.prefixesType"></a>

- *Type:* str

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

##### `reset_cidr_range_specifications` <a name="reset_cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```python
def reset_cidr_range_specifications() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_reporting_granularity` <a name="reset_reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```python
def reset_reporting_granularity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidr_range_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidr_range_specifications_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reporting_granularity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity">reporting_granularity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_range_specifications`<sup>Required</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```python
cidr_range_specifications: Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidr_range_specifications_input`<sup>Optional</sup> <a name="cidr_range_specifications_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```python
cidr_range_specifications_input: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyInstanceFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_granularity_input`<sup>Optional</sup> <a name="reporting_granularity_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```python
reporting_granularity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_granularity`<sup>Required</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```python
reporting_granularity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocumentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyInstanceFcaPolicyDocument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyInstanceFcaPolicyDocument">Ec2FcaPolicyInstanceFcaPolicyDocument</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">put_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">reset_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">reset_prefixes_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prefixes` <a name="put_prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```python
def put_prefixes(
  value: IResolvable | typing.List[Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---

##### `reset_prefixes` <a name="reset_prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```python
def reset_prefixes() -> None
```

##### `reset_prefixes_type` <a name="reset_prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```python
def reset_prefixes_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixes_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixes_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```python
prefixes: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixes_input`<sup>Optional</sup> <a name="prefixes_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```python
prefixes_input: IResolvable | typing.List[Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---

##### `prefixes_type_input`<sup>Optional</sup> <a name="prefixes_type_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```python
prefixes_type_input: str
```

- *Type:* str

---

##### `prefixes_type`<sup>Required</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```python
prefixes_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---


### Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">reset_cidr_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">reset_cidr_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_label` <a name="reset_cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```python
def reset_cidr_label() -> None
```

##### `reset_cidr_range` <a name="reset_cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```python
def reset_cidr_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidr_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidr_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_label_input`<sup>Optional</sup> <a name="cidr_label_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```python
cidr_label_input: str
```

- *Type:* str

---

##### `cidr_range_input`<sup>Optional</sup> <a name="cidr_range_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```python
cidr_range_input: str
```

- *Type:* str

---

##### `cidr_label`<sup>Required</sup> <a name="cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```python
cidr_label: str
```

- *Type:* str

---

##### `cidr_range`<sup>Required</sup> <a name="cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyNatFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyNatFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">put_cidr_range_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">reset_cidr_range_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity">reset_reporting_granularity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cidr_range_specifications` <a name="put_cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```python
def put_cidr_range_specifications(
  prefixes: IResolvable | typing.List[Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes] = None,
  prefixes_type: str = None
) -> None
```

###### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.prefixes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

###### `prefixes_type`<sup>Optional</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.prefixesType"></a>

- *Type:* str

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

##### `reset_cidr_range_specifications` <a name="reset_cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```python
def reset_cidr_range_specifications() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_reporting_granularity` <a name="reset_reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```python
def reset_reporting_granularity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidr_range_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidr_range_specifications_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reporting_granularity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity">reporting_granularity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_range_specifications`<sup>Required</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```python
cidr_range_specifications: Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidr_range_specifications_input`<sup>Optional</sup> <a name="cidr_range_specifications_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```python
cidr_range_specifications_input: IResolvable | Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyNatFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_granularity_input`<sup>Optional</sup> <a name="reporting_granularity_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```python
reporting_granularity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_granularity`<sup>Required</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```python
reporting_granularity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocumentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyNatFcaPolicyDocument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyNatFcaPolicyDocument">Ec2FcaPolicyNatFcaPolicyDocument</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes">put_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes">reset_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType">reset_prefixes_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prefixes` <a name="put_prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes"></a>

```python
def put_prefixes(
  value: IResolvable | typing.List[Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.putPrefixes.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---

##### `reset_prefixes` <a name="reset_prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixes"></a>

```python
def reset_prefixes() -> None
```

##### `reset_prefixes_type` <a name="reset_prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.resetPrefixesType"></a>

```python
def reset_prefixes_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes">prefixes</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput">prefixes_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput">prefixes_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType">prefixes_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prefixes`<sup>Required</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixes"></a>

```python
prefixes: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList</a>

---

##### `prefixes_input`<sup>Optional</sup> <a name="prefixes_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesInput"></a>

```python
prefixes_input: IResolvable | typing.List[Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---

##### `prefixes_type_input`<sup>Optional</sup> <a name="prefixes_type_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesTypeInput"></a>

```python
prefixes_type_input: str
```

- *Type:* str

---

##### `prefixes_type`<sup>Required</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.prefixesType"></a>

```python
prefixes_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

---


### Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel">reset_cidr_label</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange">reset_cidr_range</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cidr_label` <a name="reset_cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrLabel"></a>

```python
def reset_cidr_label() -> None
```

##### `reset_cidr_range` <a name="reset_cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.resetCidrRange"></a>

```python
def reset_cidr_range() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput">cidr_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput">cidr_range_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel">cidr_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange">cidr_range</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_label_input`<sup>Optional</sup> <a name="cidr_label_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabelInput"></a>

```python
cidr_label_input: str
```

- *Type:* str

---

##### `cidr_range_input`<sup>Optional</sup> <a name="cidr_range_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRangeInput"></a>

```python
cidr_range_input: str
```

- *Type:* str

---

##### `cidr_label`<sup>Required</sup> <a name="cidr_label" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrLabel"></a>

```python
cidr_label: str
```

- *Type:* str

---

##### `cidr_range`<sup>Required</sup> <a name="cidr_range" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.cidrRange"></a>

```python
cidr_range: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>

---


### Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference <a name="Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications">put_cidr_range_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications">reset_cidr_range_specifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity">reset_reporting_granularity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cidr_range_specifications` <a name="put_cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications"></a>

```python
def put_cidr_range_specifications(
  prefixes: IResolvable | typing.List[Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes] = None,
  prefixes_type: str = None
) -> None
```

###### `prefixes`<sup>Optional</sup> <a name="prefixes" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.prefixes"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsPrefixes</a>]

The CIDR range to label mappings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes Ec2FcaPolicy#prefixes}

---

###### `prefixes_type`<sup>Optional</sup> <a name="prefixes_type" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.putCidrRangeSpecifications.parameter.prefixesType"></a>

- *Type:* str

The type of prefixes the mappings apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/ec2_fca_policy#prefixes_type Ec2FcaPolicy#prefixes_type}

---

##### `reset_cidr_range_specifications` <a name="reset_cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetCidrRangeSpecifications"></a>

```python
def reset_cidr_range_specifications() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_reporting_granularity` <a name="reset_reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.resetReportingGranularity"></a>

```python
def reset_reporting_granularity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications">cidr_range_specifications</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput">cidr_range_specifications_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput">reporting_granularity_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions">dimensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity">reporting_granularity</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_range_specifications`<sup>Required</sup> <a name="cidr_range_specifications" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecifications"></a>

```python
cidr_range_specifications: Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecificationsOutputReference</a>

---

##### `cidr_range_specifications_input`<sup>Optional</sup> <a name="cidr_range_specifications_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.cidrRangeSpecificationsInput"></a>

```python
cidr_range_specifications_input: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications">Ec2FcaPolicyPcxFcaPolicyDocumentCidrRangeSpecifications</a>

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensionsInput"></a>

```python
dimensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_granularity_input`<sup>Optional</sup> <a name="reporting_granularity_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularityInput"></a>

```python
reporting_granularity_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.dimensions"></a>

```python
dimensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reporting_granularity`<sup>Required</sup> <a name="reporting_granularity" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.reportingGranularity"></a>

```python
reporting_granularity: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocumentOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyPcxFcaPolicyDocument
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyPcxFcaPolicyDocument">Ec2FcaPolicyPcxFcaPolicyDocument</a>

---


### Ec2FcaPolicyTagsList <a name="Ec2FcaPolicyTagsList" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2FcaPolicyTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2FcaPolicyTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>]

---


### Ec2FcaPolicyTagsOutputReference <a name="Ec2FcaPolicyTagsOutputReference" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_fca_policy

ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2FcaPolicyTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FcaPolicy.Ec2FcaPolicyTags">Ec2FcaPolicyTags</a>

---



