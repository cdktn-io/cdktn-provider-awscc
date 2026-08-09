# `networkfirewallVpcEndpointAssociation` Submodule <a name="`networkfirewallVpcEndpointAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallVpcEndpointAssociation <a name="NetworkfirewallVpcEndpointAssociation" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association awscc_networkfirewall_vpc_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_arn: str,
  subnet_mapping: NetworkfirewallVpcEndpointAssociationSubnetMapping,
  vpc_id: str,
  description: str = None,
  tags: IResolvable | typing.List[NetworkfirewallVpcEndpointAssociationTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.firewallArn">firewall_arn</a></code> | <code>str</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.subnetMapping">subnet_mapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_arn`<sup>Required</sup> <a name="firewall_arn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.firewallArn"></a>

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#firewall_arn NetworkfirewallVpcEndpointAssociation#firewall_arn}

---

##### `subnet_mapping`<sup>Required</sup> <a name="subnet_mapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.subnetMapping"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.vpcId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping">put_subnet_mapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_subnet_mapping` <a name="put_subnet_mapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping"></a>

```python
def put_subnet_mapping(
  subnet_id: str,
  ip_address_type: str = None
) -> None
```

###### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping.parameter.subnetId"></a>

- *Type:* str

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_id NetworkfirewallVpcEndpointAssociation#subnet_id}

---

###### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping.parameter.ipAddressType"></a>

- *Type:* str

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#ip_address_type NetworkfirewallVpcEndpointAssociation#ip_address_type}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[NetworkfirewallVpcEndpointAssociationTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]

---

##### `reset_description` <a name="reset_description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkfirewallVpcEndpointAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkfirewallVpcEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallVpcEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.endpointId">endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping">subnet_mapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList">NetworkfirewallVpcEndpointAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn">vpc_endpoint_association_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId">vpc_endpoint_association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput">firewall_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput">subnet_mapping_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn">firewall_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `endpoint_id`<sup>Required</sup> <a name="endpoint_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.endpointId"></a>

```python
endpoint_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subnet_mapping`<sup>Required</sup> <a name="subnet_mapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping"></a>

```python
subnet_mapping: NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags"></a>

```python
tags: NetworkfirewallVpcEndpointAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList">NetworkfirewallVpcEndpointAssociationTagsList</a>

---

##### `vpc_endpoint_association_arn`<sup>Required</sup> <a name="vpc_endpoint_association_arn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn"></a>

```python
vpc_endpoint_association_arn: str
```

- *Type:* str

---

##### `vpc_endpoint_association_id`<sup>Required</sup> <a name="vpc_endpoint_association_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId"></a>

```python
vpc_endpoint_association_id: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `firewall_arn_input`<sup>Optional</sup> <a name="firewall_arn_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput"></a>

```python
firewall_arn_input: str
```

- *Type:* str

---

##### `subnet_mapping_input`<sup>Optional</sup> <a name="subnet_mapping_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput"></a>

```python
subnet_mapping_input: IResolvable | NetworkfirewallVpcEndpointAssociationSubnetMapping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[NetworkfirewallVpcEndpointAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `firewall_arn`<sup>Required</sup> <a name="firewall_arn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn"></a>

```python
firewall_arn: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallVpcEndpointAssociationConfig <a name="NetworkfirewallVpcEndpointAssociationConfig" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  firewall_arn: str,
  subnet_mapping: NetworkfirewallVpcEndpointAssociationSubnetMapping,
  vpc_id: str,
  description: str = None,
  tags: IResolvable | typing.List[NetworkfirewallVpcEndpointAssociationTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn">firewall_arn</a></code> | <code>str</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping">subnet_mapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `firewall_arn`<sup>Required</sup> <a name="firewall_arn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn"></a>

```python
firewall_arn: str
```

- *Type:* str

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#firewall_arn NetworkfirewallVpcEndpointAssociation#firewall_arn}

---

##### `subnet_mapping`<sup>Required</sup> <a name="subnet_mapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping"></a>

```python
subnet_mapping: NetworkfirewallVpcEndpointAssociationSubnetMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}.

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[NetworkfirewallVpcEndpointAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}.

---

### NetworkfirewallVpcEndpointAssociationSubnetMapping <a name="NetworkfirewallVpcEndpointAssociationSubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping(
  subnet_id: str,
  ip_address_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId">subnet_id</a></code> | <code>str</code> | A SubnetId. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | A IPAddressType. |

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_id NetworkfirewallVpcEndpointAssociation#subnet_id}

---

##### `ip_address_type`<sup>Optional</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#ip_address_type NetworkfirewallVpcEndpointAssociation#ip_address_type}

---

### NetworkfirewallVpcEndpointAssociationTags <a name="NetworkfirewallVpcEndpointAssociationTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#key NetworkfirewallVpcEndpointAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#value NetworkfirewallVpcEndpointAssociation#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#key NetworkfirewallVpcEndpointAssociation#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#value NetworkfirewallVpcEndpointAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference <a name="NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType">reset_ip_address_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_address_type` <a name="reset_ip_address_type" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType"></a>

```python
def reset_ip_address_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput">ip_address_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType">ip_address_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_address_type_input`<sup>Optional</sup> <a name="ip_address_type_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput"></a>

```python
ip_address_type_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `ip_address_type`<sup>Required</sup> <a name="ip_address_type" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType"></a>

```python
ip_address_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallVpcEndpointAssociationSubnetMapping
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---


### NetworkfirewallVpcEndpointAssociationTagsList <a name="NetworkfirewallVpcEndpointAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> NetworkfirewallVpcEndpointAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[NetworkfirewallVpcEndpointAssociationTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>]

---


### NetworkfirewallVpcEndpointAssociationTagsOutputReference <a name="NetworkfirewallVpcEndpointAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import networkfirewall_vpc_endpoint_association

networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | NetworkfirewallVpcEndpointAssociationTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags">NetworkfirewallVpcEndpointAssociationTags</a>

---



