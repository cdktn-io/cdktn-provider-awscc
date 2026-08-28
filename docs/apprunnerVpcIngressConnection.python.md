# `apprunnerVpcIngressConnection` Submodule <a name="`apprunnerVpcIngressConnection` Submodule" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApprunnerVpcIngressConnection <a name="ApprunnerVpcIngressConnection" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection awscc_apprunner_vpc_ingress_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ingress_vpc_configuration: ApprunnerVpcIngressConnectionIngressVpcConfiguration,
  service_arn: str,
  tags: IResolvable | typing.List[ApprunnerVpcIngressConnectionTags] = None,
  vpc_ingress_connection_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.ingressVpcConfiguration">ingress_vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | The configuration of customer?s VPC and related VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.serviceArn">service_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.vpcIngressConnectionName">vpc_ingress_connection_name</a></code> | <code>str</code> | The customer-provided Vpc Ingress Connection name. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ingress_vpc_configuration`<sup>Required</sup> <a name="ingress_vpc_configuration" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.ingressVpcConfiguration"></a>

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

The configuration of customer?s VPC and related VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.serviceArn"></a>

- *Type:* str

The Amazon Resource Name (ARN) of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.tags"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}.

---

##### `vpc_ingress_connection_name`<sup>Optional</sup> <a name="vpc_ingress_connection_name" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.Initializer.parameter.vpcIngressConnectionName"></a>

- *Type:* str

The customer-provided Vpc Ingress Connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#vpc_ingress_connection_name ApprunnerVpcIngressConnection#vpc_ingress_connection_name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration">put_ingress_vpc_configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putTags">put_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetVpcIngressConnectionName">reset_vpc_ingress_connection_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.with"></a>

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

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_ingress_vpc_configuration` <a name="put_ingress_vpc_configuration" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration"></a>

```python
def put_ingress_vpc_configuration(
  vpc_endpoint_id: str,
  vpc_id: str
) -> None
```

###### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration.parameter.vpcEndpointId"></a>

- *Type:* str

The ID of the VPC endpoint that your App Runner service connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}

---

###### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putIngressVpcConfiguration.parameter.vpcId"></a>

- *Type:* str

The ID of the VPC that the VPC endpoint is used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}

---

##### `put_tags` <a name="put_tags" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putTags"></a>

```python
def put_tags(
  value: IResolvable | typing.List[ApprunnerVpcIngressConnectionTags]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]

---

##### `reset_tags` <a name="reset_tags" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vpc_ingress_connection_name` <a name="reset_vpc_ingress_connection_name" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.resetVpcIngressConnectionName"></a>

```python
def reset_vpc_ingress_connection_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a ApprunnerVpcIngressConnection resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a ApprunnerVpcIngressConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApprunnerVpcIngressConnection to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApprunnerVpcIngressConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the ApprunnerVpcIngressConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfiguration">ingress_vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference">ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList">ApprunnerVpcIngressConnectionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.vpcIngressConnectionArn">vpc_ingress_connection_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfigurationInput">ingress_vpc_configuration_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArnInput">service_arn_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsInput">tags_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.vpcIngressConnectionNameInput">vpc_ingress_connection_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArn">service_arn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.vpcIngressConnectionName">vpc_ingress_connection_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ingress_vpc_configuration`<sup>Required</sup> <a name="ingress_vpc_configuration" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfiguration"></a>

```python
ingress_vpc_configuration: ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference">ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tags"></a>

```python
tags: ApprunnerVpcIngressConnectionTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList">ApprunnerVpcIngressConnectionTagsList</a>

---

##### `vpc_ingress_connection_arn`<sup>Required</sup> <a name="vpc_ingress_connection_arn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.vpcIngressConnectionArn"></a>

```python
vpc_ingress_connection_arn: str
```

- *Type:* str

---

##### `ingress_vpc_configuration_input`<sup>Optional</sup> <a name="ingress_vpc_configuration_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.ingressVpcConfigurationInput"></a>

```python
ingress_vpc_configuration_input: IResolvable | ApprunnerVpcIngressConnectionIngressVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---

##### `service_arn_input`<sup>Optional</sup> <a name="service_arn_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArnInput"></a>

```python
service_arn_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tagsInput"></a>

```python
tags_input: IResolvable | typing.List[ApprunnerVpcIngressConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]

---

##### `vpc_ingress_connection_name_input`<sup>Optional</sup> <a name="vpc_ingress_connection_name_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.vpcIngressConnectionNameInput"></a>

```python
vpc_ingress_connection_name_input: str
```

- *Type:* str

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

---

##### `vpc_ingress_connection_name`<sup>Required</sup> <a name="vpc_ingress_connection_name" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.vpcIngressConnectionName"></a>

```python
vpc_ingress_connection_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnection.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApprunnerVpcIngressConnectionConfig <a name="ApprunnerVpcIngressConnectionConfig" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  ingress_vpc_configuration: ApprunnerVpcIngressConnectionIngressVpcConfiguration,
  service_arn: str,
  tags: IResolvable | typing.List[ApprunnerVpcIngressConnectionTags] = None,
  vpc_ingress_connection_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.ingressVpcConfiguration">ingress_vpc_configuration</a></code> | <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | The configuration of customer?s VPC and related VPC endpoint. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.serviceArn">service_arn</a></code> | <code>str</code> | The Amazon Resource Name (ARN) of the service. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.vpcIngressConnectionName">vpc_ingress_connection_name</a></code> | <code>str</code> | The customer-provided Vpc Ingress Connection name. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `ingress_vpc_configuration`<sup>Required</sup> <a name="ingress_vpc_configuration" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.ingressVpcConfiguration"></a>

```python
ingress_vpc_configuration: ApprunnerVpcIngressConnectionIngressVpcConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

The configuration of customer?s VPC and related VPC endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#ingress_vpc_configuration ApprunnerVpcIngressConnection#ingress_vpc_configuration}

---

##### `service_arn`<sup>Required</sup> <a name="service_arn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.serviceArn"></a>

```python
service_arn: str
```

- *Type:* str

The Amazon Resource Name (ARN) of the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#service_arn ApprunnerVpcIngressConnection#service_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.tags"></a>

```python
tags: IResolvable | typing.List[ApprunnerVpcIngressConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#tags ApprunnerVpcIngressConnection#tags}.

---

##### `vpc_ingress_connection_name`<sup>Optional</sup> <a name="vpc_ingress_connection_name" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionConfig.property.vpcIngressConnectionName"></a>

```python
vpc_ingress_connection_name: str
```

- *Type:* str

The customer-provided Vpc Ingress Connection name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#vpc_ingress_connection_name ApprunnerVpcIngressConnection#vpc_ingress_connection_name}

---

### ApprunnerVpcIngressConnectionIngressVpcConfiguration <a name="ApprunnerVpcIngressConnectionIngressVpcConfiguration" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration(
  vpc_endpoint_id: str,
  vpc_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | The ID of the VPC endpoint that your App Runner service connects to. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcId">vpc_id</a></code> | <code>str</code> | The ID of the VPC that the VPC endpoint is used in. |

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

The ID of the VPC endpoint that your App Runner service connects to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#vpc_endpoint_id ApprunnerVpcIngressConnection#vpc_endpoint_id}

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

The ID of the VPC that the VPC endpoint is used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#vpc_id ApprunnerVpcIngressConnection#vpc_id}

---

### ApprunnerVpcIngressConnectionTags <a name="ApprunnerVpcIngressConnectionTags" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags(
  key: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#key ApprunnerVpcIngressConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#value ApprunnerVpcIngressConnection#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#key ApprunnerVpcIngressConnection#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/apprunner_vpc_ingress_connection#value ApprunnerVpcIngressConnection#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference <a name="ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointIdInput">vpc_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcIdInput">vpc_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointId">vpc_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcId">vpc_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `vpc_endpoint_id_input`<sup>Optional</sup> <a name="vpc_endpoint_id_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointIdInput"></a>

```python
vpc_endpoint_id_input: str
```

- *Type:* str

---

##### `vpc_id_input`<sup>Optional</sup> <a name="vpc_id_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcIdInput"></a>

```python
vpc_id_input: str
```

- *Type:* str

---

##### `vpc_endpoint_id`<sup>Required</sup> <a name="vpc_endpoint_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcEndpointId"></a>

```python
vpc_endpoint_id: str
```

- *Type:* str

---

##### `vpc_id`<sup>Required</sup> <a name="vpc_id" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.vpcId"></a>

```python
vpc_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerVpcIngressConnectionIngressVpcConfiguration
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionIngressVpcConfiguration">ApprunnerVpcIngressConnectionIngressVpcConfiguration</a>

---


### ApprunnerVpcIngressConnectionTagsList <a name="ApprunnerVpcIngressConnectionTagsList" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApprunnerVpcIngressConnectionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[ApprunnerVpcIngressConnectionTags]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>]

---


### ApprunnerVpcIngressConnectionTagsOutputReference <a name="ApprunnerVpcIngressConnectionTagsOutputReference" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer"></a>

```python
from cdktn_provider_awscc import apprunner_vpc_ingress_connection

apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTagsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | ApprunnerVpcIngressConnectionTags
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.apprunnerVpcIngressConnection.ApprunnerVpcIngressConnectionTags">ApprunnerVpcIngressConnectionTags</a>

---



