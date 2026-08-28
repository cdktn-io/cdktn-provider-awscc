# `apprunnerVpcConnector` Submodule <a name="`apprunnerVpcConnector` Submodule" id="@cdktn/provider-awscc.apprunnerVpcConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerVpcConnector <a name="ApprunnerVpcConnector" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector awscc_apprunner_vpc_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnector(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnets: typing.List[str],
  security_groups: typing.List[str] = None,
  tags: IResolvable | typing.List[ApprunnerVpcConnectorTags] = None,
  vpc_connector_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.subnets">subnets</a></code> | <code>typing.List[str]</code> | A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]</code> | A list of metadata items that you can associate with your VPC connector resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.vpcConnectorName">vpc_connector_name</a></code> | <code>str</code> | A name for the VPC connector. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.subnets"></a>

- *Type:* typing.List[str]

A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC.

Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#subnets ApprunnerVpcConnector#subnets}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.securityGroups"></a>

- *Type:* typing.List[str]

A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets.

If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#security_groups ApprunnerVpcConnector#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]

A list of metadata items that you can associate with your VPC connector resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#tags ApprunnerVpcConnector#tags}

---

##### `vpc_connector_name`<sup>Optional</sup> <a name="vpc_connector_name" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.Initializer.parameter.vpcConnectorName"></a>

- *Type:* str

A name for the VPC connector.

If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#vpc_connector_name ApprunnerVpcConnector#vpc_connector_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetSecurityGroups">reset_security_groups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetVpcConnectorName">reset_vpc_connector_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApprunnerVpcConnectorTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]

---

##### `reset_security_groups` <a name="reset_security_groups" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetSecurityGroups"></a>

```python
def reset_security_groups() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_connector_name` <a name="reset_vpc_connector_name" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.resetVpcConnectorName"></a>

```python
def reset_vpc_connector_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApprunnerVpcConnector resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isConstruct"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnector.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnector.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnector.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnector.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApprunnerVpcConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApprunnerVpcConnector to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApprunnerVpcConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerVpcConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList">ApprunnerVpcConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorArn">vpc_connector_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorRevision">vpc_connector_revision</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.securityGroupsInput">security_groups_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.subnetsInput">subnets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorNameInput">vpc_connector_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorName">vpc_connector_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.tags"></a>

```python
tags: ApprunnerVpcConnectorTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList">ApprunnerVpcConnectorTagsList</a>

---

##### `vpc_connector_arn`<sup>Required</sup> <a name="vpc_connector_arn" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorArn"></a>

```python
vpc_connector_arn: str
```

- *Type:* str

---

##### `vpc_connector_revision`<sup>Required</sup> <a name="vpc_connector_revision" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorRevision"></a>

```python
vpc_connector_revision: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `security_groups_input`<sup>Optional</sup> <a name="security_groups_input" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.securityGroupsInput"></a>

```python
security_groups_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets_input`<sup>Optional</sup> <a name="subnets_input" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.subnetsInput"></a>

```python
subnets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApprunnerVpcConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]

---

##### `vpc_connector_name_input`<sup>Optional</sup> <a name="vpc_connector_name_input" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorNameInput"></a>

```python
vpc_connector_name_input: str
```

- *Type:* str

---

##### `security_groups`<sup>Required</sup> <a name="security_groups" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vpc_connector_name`<sup>Required</sup> <a name="vpc_connector_name" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.vpcConnectorName"></a>

```python
vpc_connector_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnector.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerVpcConnectorConfig <a name="ApprunnerVpcConnectorConfig" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnectorConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  subnets: typing.List[str],
  security_groups: typing.List[str] = None,
  tags: IResolvable | typing.List[ApprunnerVpcConnectorTags] = None,
  vpc_connector_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.subnets">subnets</a></code> | <code>typing.List[str]</code> | A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.securityGroups">security_groups</a></code> | <code>typing.List[str]</code> | A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]</code> | A list of metadata items that you can associate with your VPC connector resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.vpcConnectorName">vpc_connector_name</a></code> | <code>str</code> | A name for the VPC connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.subnets"></a>

```python
subnets: typing.List[str]
```

- *Type:* typing.List[str]

A list of IDs of subnets that App Runner should use when it associates your service with a custom Amazon VPC.

Specify IDs of subnets of a single Amazon VPC. App Runner determines the Amazon VPC from the subnets you specify.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#subnets ApprunnerVpcConnector#subnets}

---

##### `security_groups`<sup>Optional</sup> <a name="security_groups" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.securityGroups"></a>

```python
security_groups: typing.List[str]
```

- *Type:* typing.List[str]

A list of IDs of security groups that App Runner should use for access to AWS resources under the specified subnets.

If not specified, App Runner uses the default security group of the Amazon VPC. The default security group allows all outbound traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#security_groups ApprunnerVpcConnector#security_groups}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApprunnerVpcConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]

A list of metadata items that you can associate with your VPC connector resource.

A tag is a key-value pair.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#tags ApprunnerVpcConnector#tags}

---

##### `vpc_connector_name`<sup>Optional</sup> <a name="vpc_connector_name" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorConfig.property.vpcConnectorName"></a>

```python
vpc_connector_name: str
```

- *Type:* str

A name for the VPC connector.

If you don't specify a name, AWS CloudFormation generates a name for your VPC connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#vpc_connector_name ApprunnerVpcConnector#vpc_connector_name}

---

### ApprunnerVpcConnectorTags <a name="ApprunnerVpcConnectorTags" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnectorTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#key ApprunnerVpcConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#value ApprunnerVpcConnector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#key ApprunnerVpcConnector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_connector#value ApprunnerVpcConnector#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerVpcConnectorTagsList <a name="ApprunnerVpcConnectorTagsList" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnectorTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerVpcConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerVpcConnectorTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>]

---


### ApprunnerVpcConnectorTagsOutputReference <a name="ApprunnerVpcConnectorTagsOutputReference" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_connector

apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerVpcConnectorTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerVpcConnector.ApprunnerVpcConnectorTags">ApprunnerVpcConnectorTags</a>

---



