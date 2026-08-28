# `directconnectDirectConnectGatewayAssociation` Submodule <a name="`directconnectDirectConnectGatewayAssociation` Submodule" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectconnectDirectConnectGatewayAssociation <a name="DirectconnectDirectConnectGatewayAssociation" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association awscc_directconnect_direct_connect_gateway_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_direct_connect_gateway_association

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associated_gateway_id: str,
  direct_connect_gateway_id: str,
  accept_direct_connect_gateway_association_proposal_role_arn: str = None,
  allowed_prefixes_to_direct_connect_gateway: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | The ID or ARN of the virtual private gateway or transit gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.acceptDirectConnectGatewayAssociationProposalRoleArn">accept_direct_connect_gateway_association_proposal_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.allowedPrefixesToDirectConnectGateway">allowed_prefixes_to_direct_connect_gateway</a></code> | <code>typing.List[str]</code> | The Amazon VPC prefixes to advertise to the Direct Connect gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.associatedGatewayId"></a>

- *Type:* str

The ID or ARN of the virtual private gateway or transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id DirectconnectDirectConnectGatewayAssociation#associated_gateway_id}

---

##### `direct_connect_gateway_id`<sup>Required</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.directConnectGatewayId"></a>

- *Type:* str

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id DirectconnectDirectConnectGatewayAssociation#direct_connect_gateway_id}

---

##### `accept_direct_connect_gateway_association_proposal_role_arn`<sup>Optional</sup> <a name="accept_direct_connect_gateway_association_proposal_role_arn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn DirectconnectDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}

---

##### `allowed_prefixes_to_direct_connect_gateway`<sup>Optional</sup> <a name="allowed_prefixes_to_direct_connect_gateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.Initializer.parameter.allowedPrefixesToDirectConnectGateway"></a>

- *Type:* typing.List[str]

The Amazon VPC prefixes to advertise to the Direct Connect gateway.

This parameter is required when you create an association to a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway DirectconnectDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn">reset_accept_direct_connect_gateway_association_proposal_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway">reset_allowed_prefixes_to_direct_connect_gateway</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_accept_direct_connect_gateway_association_proposal_role_arn` <a name="reset_accept_direct_connect_gateway_association_proposal_role_arn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAcceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```python
def reset_accept_direct_connect_gateway_association_proposal_role_arn() -> None
```

##### `reset_allowed_prefixes_to_direct_connect_gateway` <a name="reset_allowed_prefixes_to_direct_connect_gateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.resetAllowedPrefixesToDirectConnectGateway"></a>

```python
def reset_allowed_prefixes_to_direct_connect_gateway() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct"></a>

```python
from cdktn_provider_awscc import directconnect_direct_connect_gateway_association

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement"></a>

```python
from cdktn_provider_awscc import directconnect_direct_connect_gateway_association

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource"></a>

```python
from cdktn_provider_awscc import directconnect_direct_connect_gateway_association

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import directconnect_direct_connect_gateway_association

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a DirectconnectDirectConnectGatewayAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DirectconnectDirectConnectGatewayAssociation to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DirectconnectDirectConnectGatewayAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectconnectDirectConnectGatewayAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId">association_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput">accept_direct_connect_gateway_association_proposal_role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput">allowed_prefixes_to_direct_connect_gateway_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput">associated_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput">direct_connect_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn">accept_direct_connect_gateway_association_proposal_role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway">allowed_prefixes_to_direct_connect_gateway</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `association_id`<sup>Required</sup> <a name="association_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associationId"></a>

```python
association_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `accept_direct_connect_gateway_association_proposal_role_arn_input`<sup>Optional</sup> <a name="accept_direct_connect_gateway_association_proposal_role_arn_input" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArnInput"></a>

```python
accept_direct_connect_gateway_association_proposal_role_arn_input: str
```

- *Type:* str

---

##### `allowed_prefixes_to_direct_connect_gateway_input`<sup>Optional</sup> <a name="allowed_prefixes_to_direct_connect_gateway_input" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGatewayInput"></a>

```python
allowed_prefixes_to_direct_connect_gateway_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_gateway_id_input`<sup>Optional</sup> <a name="associated_gateway_id_input" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayIdInput"></a>

```python
associated_gateway_id_input: str
```

- *Type:* str

---

##### `direct_connect_gateway_id_input`<sup>Optional</sup> <a name="direct_connect_gateway_id_input" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayIdInput"></a>

```python
direct_connect_gateway_id_input: str
```

- *Type:* str

---

##### `accept_direct_connect_gateway_association_proposal_role_arn`<sup>Required</sup> <a name="accept_direct_connect_gateway_association_proposal_role_arn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```python
accept_direct_connect_gateway_association_proposal_role_arn: str
```

- *Type:* str

---

##### `allowed_prefixes_to_direct_connect_gateway`<sup>Required</sup> <a name="allowed_prefixes_to_direct_connect_gateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.allowedPrefixesToDirectConnectGateway"></a>

```python
allowed_prefixes_to_direct_connect_gateway: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.associatedGatewayId"></a>

```python
associated_gateway_id: str
```

- *Type:* str

---

##### `direct_connect_gateway_id`<sup>Required</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.directConnectGatewayId"></a>

```python
direct_connect_gateway_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DirectconnectDirectConnectGatewayAssociationConfig <a name="DirectconnectDirectConnectGatewayAssociationConfig" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.Initializer"></a>

```python
from cdktn_provider_awscc import directconnect_direct_connect_gateway_association

directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  associated_gateway_id: str,
  direct_connect_gateway_id: str,
  accept_direct_connect_gateway_association_proposal_role_arn: str = None,
  allowed_prefixes_to_direct_connect_gateway: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId">associated_gateway_id</a></code> | <code>str</code> | The ID or ARN of the virtual private gateway or transit gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId">direct_connect_gateway_id</a></code> | <code>str</code> | The ID or ARN of the Direct Connect gateway. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn">accept_direct_connect_gateway_association_proposal_role_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions. |
| <code><a href="#@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway">allowed_prefixes_to_direct_connect_gateway</a></code> | <code>typing.List[str]</code> | The Amazon VPC prefixes to advertise to the Direct Connect gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `associated_gateway_id`<sup>Required</sup> <a name="associated_gateway_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.associatedGatewayId"></a>

```python
associated_gateway_id: str
```

- *Type:* str

The ID or ARN of the virtual private gateway or transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#associated_gateway_id DirectconnectDirectConnectGatewayAssociation#associated_gateway_id}

---

##### `direct_connect_gateway_id`<sup>Required</sup> <a name="direct_connect_gateway_id" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.directConnectGatewayId"></a>

```python
direct_connect_gateway_id: str
```

- *Type:* str

The ID or ARN of the Direct Connect gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#direct_connect_gateway_id DirectconnectDirectConnectGatewayAssociation#direct_connect_gateway_id}

---

##### `accept_direct_connect_gateway_association_proposal_role_arn`<sup>Optional</sup> <a name="accept_direct_connect_gateway_association_proposal_role_arn" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.acceptDirectConnectGatewayAssociationProposalRoleArn"></a>

```python
accept_direct_connect_gateway_association_proposal_role_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the role to accept the Direct Connect Gateway association proposal. Needs directconnect:AcceptDirectConnectGatewayAssociationProposal permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#accept_direct_connect_gateway_association_proposal_role_arn DirectconnectDirectConnectGatewayAssociation#accept_direct_connect_gateway_association_proposal_role_arn}

---

##### `allowed_prefixes_to_direct_connect_gateway`<sup>Optional</sup> <a name="allowed_prefixes_to_direct_connect_gateway" id="@cdktn/provider-awscc.directconnectDirectConnectGatewayAssociation.DirectconnectDirectConnectGatewayAssociationConfig.property.allowedPrefixesToDirectConnectGateway"></a>

```python
allowed_prefixes_to_direct_connect_gateway: typing.List[str]
```

- *Type:* typing.List[str]

The Amazon VPC prefixes to advertise to the Direct Connect gateway.

This parameter is required when you create an association to a transit gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/directconnect_direct_connect_gateway_association#allowed_prefixes_to_direct_connect_gateway DirectconnectDirectConnectGatewayAssociation#allowed_prefixes_to_direct_connect_gateway}

---



