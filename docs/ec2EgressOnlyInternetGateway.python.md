# `ec2EgressOnlyInternetGateway` Submodule <a name="`ec2EgressOnlyInternetGateway` Submodule" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2EgressOnlyInternetGateway <a name="Ec2EgressOnlyInternetGateway" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway awscc_ec2_egress_only_internet_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  tags: IResolvable | typing.List[Ec2EgressOnlyInternetGatewayTags] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC for which to create the egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]</code> | Any tags assigned to the egress only internet gateway. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC for which to create the egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#vpc_id Ec2EgressOnlyInternetGateway#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]

Any tags assigned to the egress only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#tags Ec2EgressOnlyInternetGateway#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[Ec2EgressOnlyInternetGatewayTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a Ec2EgressOnlyInternetGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isConstruct"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformElement"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformResource"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a Ec2EgressOnlyInternetGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Ec2EgressOnlyInternetGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Ec2EgressOnlyInternetGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2EgressOnlyInternetGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.egressOnlyInternetGatewayId">egress_only_internet_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList">Ec2EgressOnlyInternetGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `egress_only_internet_gateway_id`<sup>Required</sup> <a name="egress_only_internet_gateway_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.egressOnlyInternetGatewayId"></a>

```python
egress_only_internet_gateway_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tags"></a>

```python
tags: Ec2EgressOnlyInternetGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList">Ec2EgressOnlyInternetGatewayTagsList</a>

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[Ec2EgressOnlyInternetGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2EgressOnlyInternetGatewayConfig <a name="Ec2EgressOnlyInternetGatewayConfig" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  vpc_id: str,
  tags: IResolvable | typing.List[Ec2EgressOnlyInternetGatewayTags] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC for which to create the egress-only internet gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]</code> | Any tags assigned to the egress only internet gateway. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC for which to create the egress-only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#vpc_id Ec2EgressOnlyInternetGateway#vpc_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[Ec2EgressOnlyInternetGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]

Any tags assigned to the egress only internet gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#tags Ec2EgressOnlyInternetGateway#tags}

---

### Ec2EgressOnlyInternetGatewayTags <a name="Ec2EgressOnlyInternetGatewayTags" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#key Ec2EgressOnlyInternetGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#value Ec2EgressOnlyInternetGateway#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#key Ec2EgressOnlyInternetGateway#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_egress_only_internet_gateway#value Ec2EgressOnlyInternetGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2EgressOnlyInternetGatewayTagsList <a name="Ec2EgressOnlyInternetGatewayTagsList" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> Ec2EgressOnlyInternetGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[Ec2EgressOnlyInternetGatewayTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>]

---


### Ec2EgressOnlyInternetGatewayTagsOutputReference <a name="Ec2EgressOnlyInternetGatewayTagsOutputReference" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import ec2_egress_only_internet_gateway

ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | Ec2EgressOnlyInternetGatewayTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2EgressOnlyInternetGateway.Ec2EgressOnlyInternetGatewayTags">Ec2EgressOnlyInternetGatewayTags</a>

---



