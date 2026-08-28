# `ec2InstanceConnectEndpoint` Submodule <a name="`ec2InstanceConnectEndpoint` Submodule" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceConnectEndpoint <a name="Ec2InstanceConnectEndpoint" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint awscc_ec2_instance_connect_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnet_id: str,
  client_token: str = None,
  preserve_client_ip: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2InstanceConnectEndpointTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet in which the EC2 Instance Connect Endpoint was created. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.clientToken">client_token</a></code> | <code>str</code> | The client token of the instance connect endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.preserveClientIp">preserve_client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether your client's IP address is preserved as the source when you connect to a resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The security groups associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]</code> | The tags assigned to the EC2 Instance Connect Endpoint. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.subnetId"></a>

- *Type:* str

The ID of the subnet in which the EC2 Instance Connect Endpoint was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#subnet_id Ec2InstanceConnectEndpoint#subnet_id}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.clientToken"></a>

- *Type:* str

The client token of the instance connect endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#client_token Ec2InstanceConnectEndpoint#client_token}

---

##### `preserve_client_ip`<sup>Optional</sup> <a name="preserve_client_ip" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.preserveClientIp"></a>

- *Type:* bool | cdktn.IResolvable

Indicates whether your client's IP address is preserved as the source when you connect to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#preserve_client_ip Ec2InstanceConnectEndpoint#preserve_client_ip}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.securityGroupIds"></a>

- *Type:* typing.List[str]

The security groups associated with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#security_group_ids Ec2InstanceConnectEndpoint#security_group_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]

The tags assigned to the EC2 Instance Connect Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#tags Ec2InstanceConnectEndpoint#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetClientToken">reset_client_token</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetPreserveClientIp">reset_preserve_client_ip</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetSecurityGroupIds">reset_security_group_ids</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2InstanceConnectEndpointTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]

---

##### `reset_client_token` <a name="reset_client_token" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetClientToken"></a>

```python
def reset_client_token() -> None
```

##### `reset_preserve_client_ip` <a name="reset_preserve_client_ip" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetPreserveClientIp"></a>

```python
def reset_preserve_client_ip() -> None
```

##### `reset_security_group_ids` <a name="reset_security_group_ids" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetSecurityGroupIds"></a>

```python
def reset_security_group_ids() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2InstanceConnectEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2InstanceConnectEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2InstanceConnectEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZone">availability_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZoneId">availability_zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointArn">instance_connect_endpoint_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointId">instance_connect_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.networkInterfaceIds">network_interface_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.ownerId">owner_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.publicDnsNames">public_dns_names</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList">Ec2InstanceConnectEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientTokenInput">client_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIpInput">preserve_client_ip_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIdsInput">security_group_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientToken">client_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIp">preserve_client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `availability_zone`<sup>Required</sup> <a name="availability_zone" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZone"></a>

```python
availability_zone: str
```

- *Type:* str

---

##### `availability_zone_id`<sup>Required</sup> <a name="availability_zone_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZoneId"></a>

```python
availability_zone_id: str
```

- *Type:* str

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_connect_endpoint_arn`<sup>Required</sup> <a name="instance_connect_endpoint_arn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointArn"></a>

```python
instance_connect_endpoint_arn: str
```

- *Type:* str

---

##### `instance_connect_endpoint_id`<sup>Required</sup> <a name="instance_connect_endpoint_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointId"></a>

```python
instance_connect_endpoint_id: str
```

- *Type:* str

---

##### `network_interface_ids`<sup>Required</sup> <a name="network_interface_ids" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.networkInterfaceIds"></a>

```python
network_interface_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `owner_id`<sup>Required</sup> <a name="owner_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.ownerId"></a>

```python
owner_id: str
```

- *Type:* str

---

##### `public_dns_names`<sup>Required</sup> <a name="public_dns_names" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.publicDnsNames"></a>

```python
public_dns_names: Ec2InstanceConnectEndpointPublicDnsNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tags"></a>

```python
tags: Ec2InstanceConnectEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList">Ec2InstanceConnectEndpointTagsList</a>

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `client_token_input`<sup>Optional</sup> <a name="client_token_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientTokenInput"></a>

```python
client_token_input: str
```

- *Type:* str

---

##### `preserve_client_ip_input`<sup>Optional</sup> <a name="preserve_client_ip_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIpInput"></a>

```python
preserve_client_ip_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids_input`<sup>Optional</sup> <a name="security_group_ids_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIdsInput"></a>

```python
security_group_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2InstanceConnectEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]

---

##### `client_token`<sup>Required</sup> <a name="client_token" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

---

##### `preserve_client_ip`<sup>Required</sup> <a name="preserve_client_ip" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIp"></a>

```python
preserve_client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `security_group_ids`<sup>Required</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceConnectEndpointConfig <a name="Ec2InstanceConnectEndpointConfig" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnet_id: str,
  client_token: str = None,
  preserve_client_ip: bool | IResolvable = None,
  security_group_ids: typing.List[str] = None,
  tags: IResolvable | typing.List[Ec2InstanceConnectEndpointTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.subnetId">subnet_id</a></code> | <code>str</code> | The ID of the subnet in which the EC2 Instance Connect Endpoint was created. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.clientToken">client_token</a></code> | <code>str</code> | The client token of the instance connect endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.preserveClientIp">preserve_client_ip</a></code> | <code>bool \| cdktn.IResolvable</code> | Indicates whether your client's IP address is preserved as the source when you connect to a resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.securityGroupIds">security_group_ids</a></code> | <code>typing.List[str]</code> | The security groups associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]</code> | The tags assigned to the EC2 Instance Connect Endpoint. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

The ID of the subnet in which the EC2 Instance Connect Endpoint was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#subnet_id Ec2InstanceConnectEndpoint#subnet_id}

---

##### `client_token`<sup>Optional</sup> <a name="client_token" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.clientToken"></a>

```python
client_token: str
```

- *Type:* str

The client token of the instance connect endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#client_token Ec2InstanceConnectEndpoint#client_token}

---

##### `preserve_client_ip`<sup>Optional</sup> <a name="preserve_client_ip" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.preserveClientIp"></a>

```python
preserve_client_ip: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Indicates whether your client's IP address is preserved as the source when you connect to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#preserve_client_ip Ec2InstanceConnectEndpoint#preserve_client_ip}

---

##### `security_group_ids`<sup>Optional</sup> <a name="security_group_ids" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.securityGroupIds"></a>

```python
security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

The security groups associated with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#security_group_ids Ec2InstanceConnectEndpoint#security_group_ids}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2InstanceConnectEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]

The tags assigned to the EC2 Instance Connect Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#tags Ec2InstanceConnectEndpoint#tags}

---

### Ec2InstanceConnectEndpointPublicDnsNames <a name="Ec2InstanceConnectEndpointPublicDnsNames" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames()
```


### Ec2InstanceConnectEndpointPublicDnsNamesDualstack <a name="Ec2InstanceConnectEndpointPublicDnsNamesDualstack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack()
```


### Ec2InstanceConnectEndpointPublicDnsNamesIpv4 <a name="Ec2InstanceConnectEndpointPublicDnsNamesIpv4" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4()
```


### Ec2InstanceConnectEndpointTags <a name="Ec2InstanceConnectEndpointTags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#key Ec2InstanceConnectEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#value Ec2InstanceConnectEndpoint#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#key Ec2InstanceConnectEndpoint#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_instance_connect_endpoint#value Ec2InstanceConnectEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference <a name="Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName">fips_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack">Ec2InstanceConnectEndpointPublicDnsNamesDualstack</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `fips_dns_name`<sup>Required</sup> <a name="fips_dns_name" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName"></a>

```python
fips_dns_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue"></a>

```python
internal_value: Ec2InstanceConnectEndpointPublicDnsNamesDualstack
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack">Ec2InstanceConnectEndpointPublicDnsNamesDualstack</a>

---


### Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference <a name="Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName">fips_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4">Ec2InstanceConnectEndpointPublicDnsNamesIpv4</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `fips_dns_name`<sup>Required</sup> <a name="fips_dns_name" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName"></a>

```python
fips_dns_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue"></a>

```python
internal_value: Ec2InstanceConnectEndpointPublicDnsNamesIpv4
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4">Ec2InstanceConnectEndpointPublicDnsNamesIpv4</a>

---


### Ec2InstanceConnectEndpointPublicDnsNamesOutputReference <a name="Ec2InstanceConnectEndpointPublicDnsNamesOutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack">dualstack</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4">ipv4</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames">Ec2InstanceConnectEndpointPublicDnsNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dualstack`<sup>Required</sup> <a name="dualstack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack"></a>

```python
dualstack: Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a>

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4"></a>

```python
ipv4: Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue"></a>

```python
internal_value: Ec2InstanceConnectEndpointPublicDnsNames
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames">Ec2InstanceConnectEndpointPublicDnsNames</a>

---


### Ec2InstanceConnectEndpointTagsList <a name="Ec2InstanceConnectEndpointTagsList" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2InstanceConnectEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2InstanceConnectEndpointTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>]

---


### Ec2InstanceConnectEndpointTagsOutputReference <a name="Ec2InstanceConnectEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_instance_connect_endpoint

ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2InstanceConnectEndpointTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags">Ec2InstanceConnectEndpointTags</a>

---



