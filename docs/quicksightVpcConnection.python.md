# `quicksightVpcConnection` Submodule <a name="`quicksightVpcConnection` Submodule" id="@cdktn/provider-awscc.quicksightVpcConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightVpcConnection <a name="QuicksightVpcConnection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection awscc_quicksight_vpc_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_status: str = None,
  aws_account_id: str = None,
  dns_resolvers: typing.List[str] = None,
  name: str = None,
  role_arn: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[QuicksightVpcConnectionTags] = None,
  vpc_connection_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dnsResolvers">dns_resolvers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.vpcConnectionId">vpc_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.availabilityStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.awsAccountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `dns_resolvers`<sup>Optional</sup> <a name="dns_resolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dnsResolvers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.roleArn"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.subnetIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `vpc_connection_id`<sup>Optional</sup> <a name="vpc_connection_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.vpcConnectionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAvailabilityStatus">reset_availability_status</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId">reset_aws_account_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers">reset_dns_resolvers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetRoleArn">reset_role_arn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSubnetIds">reset_subnet_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetVpcConnectionId">reset_vpc_connection_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[QuicksightVpcConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]

---

##### `reset_availability_status` <a name="reset_availability_status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAvailabilityStatus"></a>

```python
def reset_availability_status() -> None
```

##### `reset_aws_account_id` <a name="reset_aws_account_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId"></a>

```python
def reset_aws_account_id() -> None
```

##### `reset_dns_resolvers` <a name="reset_dns_resolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers"></a>

```python
def reset_dns_resolvers() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_role_arn` <a name="reset_role_arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetRoleArn"></a>

```python
def reset_role_arn() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_subnet_ids` <a name="reset_subnet_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetSubnetIds"></a>

```python
def reset_subnet_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_connection_id` <a name="reset_vpc_connection_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.resetVpcConnectionId"></a>

```python
def reset_vpc_connection_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a QuicksightVpcConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the QuicksightVpcConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing QuicksightVpcConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightVpcConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.arn">arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.createdTime">created_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lastUpdatedTime">last_updated_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.networkInterfaces">network_interfaces</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList">QuicksightVpcConnectionNetworkInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList">QuicksightVpcConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatusInput">availability_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput">aws_account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput">dns_resolvers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput">role_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput">subnet_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput">vpc_connection_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus">availability_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers">dns_resolvers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn">role_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId">vpc_connection_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.arn"></a>

```python
arn: str
```

- *Type:* str

---

##### `created_time`<sup>Required</sup> <a name="created_time" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.createdTime"></a>

```python
created_time: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_time`<sup>Required</sup> <a name="last_updated_time" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.lastUpdatedTime"></a>

```python
last_updated_time: str
```

- *Type:* str

---

##### `network_interfaces`<sup>Required</sup> <a name="network_interfaces" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.networkInterfaces"></a>

```python
network_interfaces: QuicksightVpcConnectionNetworkInterfacesList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList">QuicksightVpcConnectionNetworkInterfacesList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tags"></a>

```python
tags: QuicksightVpcConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList">QuicksightVpcConnectionTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `availability_status_input`<sup>Optional</sup> <a name="availability_status_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatusInput"></a>

```python
availability_status_input: str
```

- *Type:* str

---

##### `aws_account_id_input`<sup>Optional</sup> <a name="aws_account_id_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput"></a>

```python
aws_account_id_input: str
```

- *Type:* str

---

##### `dns_resolvers_input`<sup>Optional</sup> <a name="dns_resolvers_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput"></a>

```python
dns_resolvers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `role_arn_input`<sup>Optional</sup> <a name="role_arn_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput"></a>

```python
role_arn_input: str
```

- *Type:* str

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids_input`<sup>Optional</sup> <a name="subnet_ids_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput"></a>

```python
subnet_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[QuicksightVpcConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]

---

##### `vpc_connection_id_input`<sup>Optional</sup> <a name="vpc_connection_id_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput"></a>

```python
vpc_connection_id_input: str
```

- *Type:* str

---

##### `availability_status`<sup>Required</sup> <a name="availability_status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

---

##### `aws_account_id`<sup>Required</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

---

##### `dns_resolvers`<sup>Required</sup> <a name="dns_resolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers"></a>

```python
dns_resolvers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role_arn`<sup>Required</sup> <a name="role_arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_connection_id`<sup>Required</sup> <a name="vpc_connection_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId"></a>

```python
vpc_connection_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightVpcConnectionConfig <a name="QuicksightVpcConnectionConfig" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  availability_status: str = None,
  aws_account_id: str = None,
  dns_resolvers: typing.List[str] = None,
  name: str = None,
  role_arn: str = None,
  security_group_ids: typing.List[str] = None,
  subnet_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[QuicksightVpcConnectionTags] = None,
  vpc_connection_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.availabilityStatus">availability_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId">aws_account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers">dns_resolvers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn">role_arn</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId">vpc_connection_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_status`<sup>Optional</sup> <a name="availability_status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.availabilityStatus"></a>

```python
availability_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#availability_status QuicksightVpcConnection#availability_status}.

---

##### `aws_account_id`<sup>Optional</sup> <a name="aws_account_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId"></a>

```python
aws_account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `dns_resolvers`<sup>Optional</sup> <a name="dns_resolvers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers"></a>

```python
dns_resolvers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `role_arn`<sup>Optional</sup> <a name="role_arn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn"></a>

```python
role_arn: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `subnet_ids`<sup>Optional</sup> <a name="subnet_ids" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[QuicksightVpcConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `vpc_connection_id`<sup>Optional</sup> <a name="vpc_connection_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId"></a>

```python
vpc_connection_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

### QuicksightVpcConnectionNetworkInterfaces <a name="QuicksightVpcConnectionNetworkInterfaces" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces()
```


### QuicksightVpcConnectionTags <a name="QuicksightVpcConnectionTags" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.key">key</a></code> | <code>str</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.value">value</a></code> | <code>str</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#key QuicksightVpcConnection#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/quicksight_vpc_connection#value QuicksightVpcConnection#value}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightVpcConnectionNetworkInterfacesList <a name="QuicksightVpcConnectionNetworkInterfacesList" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightVpcConnectionNetworkInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### QuicksightVpcConnectionNetworkInterfacesOutputReference <a name="QuicksightVpcConnectionNetworkInterfacesOutputReference" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId">network_interface_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces">QuicksightVpcConnectionNetworkInterfaces</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `network_interface_id`<sup>Required</sup> <a name="network_interface_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.networkInterfaceId"></a>

```python
network_interface_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfacesOutputReference.property.internalValue"></a>

```python
internal_value: QuicksightVpcConnectionNetworkInterfaces
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionNetworkInterfaces">QuicksightVpcConnectionNetworkInterfaces</a>

---


### QuicksightVpcConnectionTagsList <a name="QuicksightVpcConnectionTagsList" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> QuicksightVpcConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[QuicksightVpcConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>]

---


### QuicksightVpcConnectionTagsOutputReference <a name="QuicksightVpcConnectionTagsOutputReference" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import quicksight_vpc_connection

quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | QuicksightVpcConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightVpcConnection.QuicksightVpcConnectionTags">QuicksightVpcConnectionTags</a>

---



